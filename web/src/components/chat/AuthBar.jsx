import { Star, Volume2, VolumeX, Users } from "lucide-react";

export default function AuthBar({
  username,
  user,
  soundEnabled,
  onToggleSound,
  onToggleUserPanel,
}) {
  return (
    <div className="w-full max-w-lg bg-black/30 backdrop-blur-md border border-purple-500/40 rounded-2xl p-4 mb-8 shadow-2xl">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-2 text-purple-200 text-sm">
          <Star className="w-4 h-4 text-purple-400" />
          <span>
            Welcome, {username} {!user && "(Guest)"}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleSound}
            className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 transition-colors"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={onToggleUserPanel}
            className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 transition-colors"
          >
            <Users className="w-4 h-4" />
          </button>
          {!user && (
            <a
              href="/account/signin"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all text-sm font-medium"
            >
              Sign In
            </a>
          )}
          {user && (
            <a
              href="/account/logout"
              className="px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 rounded-lg transition-colors text-sm"
            >
              Sign Out
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
