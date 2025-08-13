import { useState } from "react";
import useAuth from "@/utils/useAuth";

function MainComponent() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInWithCredentials } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      await signInWithCredentials({
        email,
        password,
        callbackUrl: "/",
        redirect: true,
      });
    } catch (err) {
      const errorMessages = {
        OAuthSignin:
          "Couldn't start sign-in. Please try again or use a different method.",
        OAuthCallback: "Sign-in failed after redirecting. Please try again.",
        OAuthCreateAccount:
          "Couldn't create an account with this sign-in method. Try another option.",
        EmailCreateAccount:
          "This email can't be used to create an account. It may already exist.",
        Callback: "Something went wrong during sign-in. Please try again.",
        OAuthAccountNotLinked:
          "This account is linked to a different sign-in method. Try using that instead.",
        CredentialsSignin:
          "Incorrect email or password. Try again or reset your password.",
        AccessDenied: "You don't have permission to sign in.",
        Configuration:
          "Sign-in isn't working right now. Please try again later.",
        Verification: "Your sign-in link has expired. Request a new one.",
      };

      setError(
        errorMessages[err.message] || "Something went wrong. Please try again.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <form
        noValidate
        onSubmit={onSubmit}
        className="w-full max-w-md bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-2xl relative z-10"
      >
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Welcome Back to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Galactic Chat</span>
        </h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-200">
              Email
            </label>
            <div className="overflow-hidden rounded-lg border border-purple-500/50 bg-black/20 px-4 py-3 focus-within:border-purple-400 focus-within:ring-1 focus-within:ring-purple-400">
              <input
                required
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent text-lg outline-none text-white placeholder-purple-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-purple-200">
              Password
            </label>
            <div className="overflow-hidden rounded-lg border border-purple-500/50 bg-black/20 px-4 py-3 focus-within:border-purple-400 focus-within:ring-1 focus-within:ring-purple-400">
              <input
                required
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg bg-transparent text-lg outline-none text-white placeholder-purple-300"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-lg bg-red-500/20 border border-red-500/50 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-base font-medium text-white transition-all hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 shadow-lg"
          >
            {loading ? "Entering the Galaxy..." : "Sign In"}
          </button>
          <p className="text-center text-sm text-purple-200">
            Don't have an account?{" "}
            <a
              href={`/account/signup${
                typeof window !== "undefined" ? window.location.search : ""
              }`}
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Join the Galaxy
            </a>
          </p>
        </div>
      </form>

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