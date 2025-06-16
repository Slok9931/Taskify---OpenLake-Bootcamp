import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Home, User, StickyNote, LogOut } from "lucide-react";

const Navbar = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("taskifyUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="w-full px-6 py-4 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo + tagline */}
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-wider text-white drop-shadow-sm">
            <CheckCircle className="w-6 h-6 text-white" />
            Taskify
          </h1>
          <p className="text-xs text-white/80 ml-8 -mt-1">Plan. Prioritize. Progress.</p>
        </div>

        {/* Navigation links */}
        <div className="flex items-center gap-6 relative">
          <Link to="/todo" className="flex items-center gap-1 hover:opacity-90">
            <Home size={20} /> <span className="hidden sm:inline">Todo</span>
          </Link>
          <Link to="/note" className="flex items-center gap-1 hover:opacity-90">
            <StickyNote size={20} /> <span className="hidden sm:inline">Notes</span>
          </Link>

          {/* User Icon dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center gap-1 hover:opacity-90">
              <User size={20} /> <span className="hidden sm:inline">Profile</span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50 p-4 text-sm">
                <p className="font-semibold">{user.name || "Guest"}</p>
                <p className="text-xs text-gray-500 mb-2">{user.email}</p>
                <hr className="my-2" />
                <Link to="/profile" className="block py-1 hover:text-indigo-600">Profile</Link>
                <Link to="/login" className="block py-1 text-red-500 hover:text-red-700">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
