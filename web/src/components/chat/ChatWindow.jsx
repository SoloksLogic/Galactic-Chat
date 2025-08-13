import MessageInput from "./MessageInput.jsx";
import MessageList from "./MessageList.jsx";
import UserPanel from "./UserPanel.jsx";

export default function ChatWindow({
  messages,
  newMessage,
  setNewMessage,
  sendMessage,
  handleTyping,
  typingUsers,
  messagesEndRef,
  showUserPanel,
  activeUsers,
}) {
  return (
    <div className="w-full max-w-4xl bg-black/20 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden mb-8">
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <MessageInput
            newMessage={newMessage}
            onNewMessageChange={setNewMessage}
            onSendMessage={sendMessage}
            onTyping={handleTyping}
          />
          <MessageList
            messages={messages}
            typingUsers={typingUsers}
            messagesEndRef={messagesEndRef}
          />
        </div>
        {showUserPanel && <UserPanel activeUsers={activeUsers} />}
      </div>
    </div>
  );
}
