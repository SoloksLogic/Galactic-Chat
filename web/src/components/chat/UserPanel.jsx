import { Users } from "lucide-react";

export default function UserPanel({ activeUsers }) {
  return (
    <div className="w-64 bg-black/10 border-l border-purple-500/20">
      <div className="p-3 border-b border-purple-500/20">
        <h2 className="text-sm font-semibold text-white flex items-center">
          <Users className="w-4 h-4 mr-2" />
          Online ({activeUsers.length})
        </h2>
      </div>
      <div className="p-3 space-y-2 h-72 overflow-y-auto">
        {activeUsers.map((user) => (
          <div key={user.id} className="flex items-center space-x-2">
            <img
              src={
                user.avatar_url ||
                `/api/avatar/guest/${
                  (Math.abs(
                    user.username.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
                  ) %
                    100) +
                  1
                }`
              }
              alt={user.username}
              className="w-6 h-6 rounded-full border border-purple-400/50"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1">
                <span className="text-purple-200 text-xs font-medium truncate">
                  {user.username}
                </span>
                {!user.is_guest && (
                  <span className="text-xs bg-purple-600 text-white px-1 py-0.5 rounded-full">
                    ✓
                  </span>
                )}
              </div>
              {user.is_typing && (
                <span className="text-xs text-purple-400">typing...</span>
              )}
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
