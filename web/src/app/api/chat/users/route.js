import sql from "@/app/api/utils/sql";
import { auth } from "@/auth";

// Get active users
export async function GET(request) {
  try {
    // Clean up old users (inactive for more than 5 minutes)
    await sql`
      DELETE FROM active_users 
      WHERE last_seen < NOW() - INTERVAL '5 minutes'
    `;
    
    const users = await sql`
      SELECT 
        id,
        username,
        user_id,
        is_guest,
        avatar_url,
        last_seen,
        is_typing
      FROM active_users 
      ORDER BY last_seen DESC
    `;
    
    return Response.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return Response.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// Update user presence
export async function POST(request) {
  try {
    const session = await auth();
    const body = await request.json();
    const { username, isGuest, avatarUrl, isTyping } = body;
    
    if (!username) {
      return Response.json({ error: 'Username is required' }, { status: 400 });
    }
    
    // Upsert user presence
    const [user] = await sql`
      INSERT INTO active_users (username, user_id, is_guest, avatar_url, is_typing, last_seen)
      VALUES (${username}, ${session?.user?.id || null}, ${isGuest !== false}, ${avatarUrl}, ${isTyping || false}, NOW())
      ON CONFLICT (username) 
      DO UPDATE SET 
        user_id = EXCLUDED.user_id,
        is_guest = EXCLUDED.is_guest,
        avatar_url = EXCLUDED.avatar_url,
        is_typing = EXCLUDED.is_typing,
        last_seen = NOW()
      RETURNING id, username, user_id, is_guest, avatar_url, last_seen, is_typing
    `;
    
    return Response.json({ user });
  } catch (error) {
    console.error('Error updating user presence:', error);
    return Response.json({ error: 'Failed to update user presence' }, { status: 500 });
  }
}

// Remove user from active list
export async function DELETE(request) {
  try {
    const body = await request.json();
    const { username } = body;
    
    if (!username) {
      return Response.json({ error: 'Username is required' }, { status: 400 });
    }
    
    await sql`
      DELETE FROM active_users 
      WHERE username = ${username}
    `;
    
    return Response.json({ success: true });
  } catch (error) {
    console.error('Error removing user:', error);
    return Response.json({ error: 'Failed to remove user' }, { status: 500 });
  }
}