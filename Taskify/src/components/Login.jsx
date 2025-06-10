import { Fade } from "react-awesome-reveal";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient px-4">
      <Fade triggerOnce cascade direction="up" duration={500}>
        <div className="relative group bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-500 ease-in-out hover:scale-[1.02]">
          {/* Animated glowing border */}
          <div className="absolute inset-1 rounded-2xl border-2 opacity-0 group-hover:opacity-200 transition-all duration-500 border-indigo-500 group-hover:shadow-[0_0_30px_5px_rgba(99,102,241,0.7)] z-[-1]" />

          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Login to Taskify
          </h2>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white rounded-xl font-semibold transition duration-300"
            >
              Login
            </button>
            <p className="text-center text-sm text-gray-500">
              Don’t have an account? Signup
            </p>
          </form>
        </div>
      </Fade>
    </div>
  );
}
