import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Home, User, StickyNote, LogOut } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-wider text-white drop-shadow-sm">
            <CheckCircle className="w-6 h-6 text-white" />
            Taskify
          </h1>
          <p className="text-xs text-white/80 ml-8 -mt-1">Plan. Prioritize. Progress.</p>
        </div>


        <div className="flex gap-6">
          <Link to="/todo" className="flex items-center gap-1 hover:opacity-90 transition duration-150 ease-in-out">
            <Home size={20} /> <span className="hidden sm:inline">Todo</span>
          </Link>
          <Link to="/note" className="flex items-center gap-1 hover:opacity-90">
            <StickyNote size={20} /> <span className="hidden sm:inline">Notes</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-1 hover:opacity-90">
            <User size={20} /> <span className="hidden sm:inline">Profile</span>
          </Link>
          <Link to="/login" className="flex items-center gap-1 hover:opacity-90">
            <LogOut size={20} /> <span className="hidden sm:inline">Logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
