import React, { useState } from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-teal-400 text-white shadow-md font-sans">
      <div className="text-2xl font-bold tracking-wide">Taskify</div>

      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full border border-gray-300 text-gray-800 w-44 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer select-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div
            className={`absolute right-0 top-10 bg-white rounded-lg p-3 shadow-lg transition-all duration-300 z-50 ${
              showDropdown
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <a
              href="/profile"
              className="block text-gray-800 hover:text-teal-500 py-1"
            >
              Profile
            </a>
            <a
              href="/logout"
              className="block text-gray-800 hover:text-teal-500 py-1"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
