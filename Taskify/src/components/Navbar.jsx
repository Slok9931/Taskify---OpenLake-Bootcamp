import React from "react";
import { Link } from "react-router-dom";
import { Home, User, StickyNote, LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">Taskify</h1>

        <div className="flex gap-6">
          <Link to="/todo" className="flex items-center gap-1 hover:opacity-90">
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
