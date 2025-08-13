import useAuth from "@/utils/useAuth";

function MainComponent() {
  const { signOut } = useAuth();
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <div className="w-full max-w-md bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-2xl relative z-10">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Leaving the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Galaxy</span>
        </h1>

        <button
          onClick={handleSignOut}
          className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-base font-medium text-white transition-all hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black shadow-lg"
        >
          Sign Out
        </button>
      </div>

      <style jsx global>{`
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="0.5" fill="white"/><circle cx="80" cy="40" r="0.3" fill="white"/><circle cx="40" cy="60" r="0.4" fill="white"/><circle cx="90" cy="80" r="0.2" fill="white"/><circle cx="10" cy="90" r="0.6" fill="white"/></svg>') repeat;
          animation: move-stars 50s linear infinite;
        }
        
        .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="30" r="0.3" fill="white" opacity="0.8"/><circle cx="70" cy="70" r="0.2" fill="white" opacity="0.6"/><circle cx="50" cy="10" r="0.4" fill="white" opacity="0.9"/></svg>') repeat;
          animation: move-twinkling 100s linear infinite;
        }
        
        @keyframes move-stars {
          from { transform: translateX(0px); }
          to { transform: translateX(-100px); }
        }
        
        @keyframes move-twinkling {
          from { transform: translateX(0px); }
          to { transform: translateX(-100px); }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;