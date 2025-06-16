import { useState } from "react";
import { UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-teal-600 text-white shadow-md font-sans">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        Taskify
      </Link>

      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full border border-gray-700 text-gray-900 w-44 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />

        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer select-none"
          >
            <UserCircle className="h-6 w-6 text-white" />
          </div>

          <div
            className={`absolute right-0 top-10 bg-white rounded-lg p-3 shadow-lg transition-all duration-300 z-50 ${
              showDropdown
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <Link
              to="/profile"
              className="block text-gray-800 hover:text-teal-500 py-1"
            >
              Profile
            </Link>
            <Link
              to="/logout"
              className="block text-gray-800 hover:text-teal-500 py-1"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
