import { Send } from "lucide-react";

export default function MessageInput({
  newMessage,
  onNewMessageChange,
  onSendMessage,
  onTyping,
}) {
  return (
    <form
      onSubmit={onSendMessage}
      className="p-4 bg-black/10 border-b border-purple-500/20"
    >
      <div className="flex space-x-3">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => {
            onNewMessageChange(e.target.value);
            onTyping();
          }}
          placeholder="Type your message to the galaxy..."
          className="flex-1 bg-black/30 border border-purple-500/50 rounded-lg px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
          maxLength={500}
        />
        <button
          type="submit"
          disabled={!newMessage.trim()}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
