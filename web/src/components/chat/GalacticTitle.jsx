export default function GalacticTitle() {
  return (
    <div className="w-full max-w-6xl text-center mb-8">
      <h1 className="galactic-title text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 to-purple-400 animate-gradient-x drop-shadow-2xl mb-4">
        GALACTIC
      </h1>
      <h2 className="galactic-subtitle text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-y drop-shadow-xl">
        CHAT
      </h2>
      <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
    </div>
  );
}
