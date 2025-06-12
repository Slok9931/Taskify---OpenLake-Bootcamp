import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function Signup({ onSignup }) {
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(userdata); // send data to parent
  };

  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient px-4">
      <Fade triggerOnce cascade direction="up" duration={500}>
        <div className="relative group bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-500 ease-in-out hover:scale-[1.02]">
          {/* Animated glowing border */}
          <div className="absolute inset-1 rounded-2xl border-2 opacity-0 group-hover:opacity-200 transition-all duration-500 border-indigo-500 group-hover:shadow-[0_0_30px_5px_rgba(99,102,241,0.7)] z-[-1]" />

          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Create a Taskify Account
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={userdata.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userdata.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userdata.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="button"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white rounded-xl font-semibold transition duration-300"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </Fade>
    </div>
  );
}
