import sql from "@/app/api/utils/sql";
import { auth } from "@/auth";

// Get recent messages
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit')) || 200;
    
    const messages = await sql`
      SELECT 
        id,
        content,
        username,
        user_id,
        is_guest,
        avatar_url,
        created_at,
        is_deleted
      FROM messages 
      WHERE is_deleted = false
      ORDER BY created_at DESC 
      LIMIT ${limit}
    `;
    
    return Response.json({ 
      messages: messages.reverse() // Return in chronological order
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return Response.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

// Send a new message
export async function POST(request) {
  try {
    const session = await auth();
    const body = await request.json();
    const { content, username, isGuest, avatarUrl } = body;
    
    if (!content || !username) {
      return Response.json({ error: 'Content and username are required' }, { status: 400 });
    }
    
    // Check if user is banned
    const bannedCheck = await sql`
      SELECT id FROM banned_users 
      WHERE (username = ${username} OR user_id = ${session?.user?.id || null})
      AND banned_at > NOW() - INTERVAL '30 days'
    `;
    
    if (bannedCheck.length > 0) {
      return Response.json({ error: 'User is banned' }, { status: 403 });
    }
    
    const [message] = await sql`
      INSERT INTO messages (content, username, user_id, is_guest, avatar_url)
      VALUES (${content}, ${username}, ${session?.user?.id || null}, ${isGuest !== false}, ${avatarUrl})
      RETURNING id, content, username, user_id, is_guest, avatar_url, created_at, is_deleted
    `;
    
    return Response.json({ message });
  } catch (error) {
    console.error('Error sending message:', error);
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

// Delete a message (admin only)
export async function DELETE(request) {
  try {
    const session = await auth();
    const url = new URL(request.url);
    const messageId = url.searchParams.get('id');
    
    if (!messageId) {
      return Response.json({ error: 'Message ID is required' }, { status: 400 });
    }
    
    // Check if user is admin
    const adminCheck = await sql`
      SELECT is_admin FROM user_profiles 
      WHERE user_id = ${session?.user?.id || null}
    `;
    
    if (!adminCheck.length || !adminCheck[0].is_admin) {
      return Response.json({ error: 'Admin access required' }, { status: 403 });
    }
    
    await sql`
      UPDATE messages 
      SET is_deleted = true 
      WHERE id = ${messageId}
    `;
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Error deleting message:', error);
    return Response.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}