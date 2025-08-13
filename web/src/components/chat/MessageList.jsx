import TypingIndicator from "./TypingIndicator.jsx";

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function MessageList({ messages, typingUsers, messagesEndRef }) {
  return (
    <div className="h-[600px] overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className="flex items-start space-x-3 animate-fade-in"
        >
          <img
            src={
              message.avatar_url ||
              `/api/avatar/guest/${
                (Math.abs(
                  message.username.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
                ) %
                  100) +
                1
              }`
            }
            alt={message.username}
            className="w-8 h-8 rounded-full border-2 border-purple-400/50 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-medium text-purple-200 text-sm">
                {message.username}
              </span>
              {!message.is_guest && (
                <span className="text-xs bg-purple-600 text-white px-1.5 py-0.5 rounded-full">
                  ✓
                </span>
              )}
              <span className="text-xs text-purple-300">
                {formatTime(message.created_at)}
              </span>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 text-white text-sm">
              {message.content}
            </div>
          </div>
        </div>
      ))}

      <TypingIndicator typingUsers={typingUsers} />

      <div ref={messagesEndRef} />
    </div>
  );
}
