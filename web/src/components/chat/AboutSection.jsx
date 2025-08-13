import { Star } from "lucide-react";

export default function AboutSection({
  activeUsersCount,
  messagesCount,
  soundEnabled,
}) {
  return (
    <div className="w-full max-w-6xl bg-black/20 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center justify-center">
          <Star className="w-5 h-5 mr-2 text-purple-400" />
          About Galactic Chat
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-purple-200 text-sm">
          <div className="text-center">
            <h4 className="font-medium text-white mb-3">🌟 Instant Access</h4>
            <p>
              Jump right in as a guest with an auto-generated space name, or
              create an account for a permanent identity in the galaxy.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-white mb-3">🚀 Real-Time Chat</h4>
            <p>
              Experience live messaging with typing indicators, user
              presence, and smooth animations in our cosmic chatroom.
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-medium text-white mb-3">🌌 Space Theme</h4>
            <p>
              Enjoy the immersive galaxy background with moving stars,
              shooting meteors, and a beautiful neon aesthetic.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-purple-300 text-xs">
            Currently {activeUsersCount} explorer
            {activeUsersCount !== 1 ? "s" : ""} online • {messagesCount}{" "}
            message{messagesCount !== 1 ? "s" : ""} in the galaxy •{" "}
            {soundEnabled ? "🔊" : "🔇"} Sound{" "}
            {soundEnabled ? "enabled" : "disabled"}
          </p>
        </div>
      </div>
    </div>
  );
}
