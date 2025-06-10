import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-zinc-900 text-white flex flex-col p-4 gap-6 shadow">
      <div className="text-3xl font-bold">Taskify</div>

      <div className="flex items-center gap-4 pb-4 border-b border-zinc-700">
        <img
          src="/vite.jpg"
          alt="User"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <div>
          <p className="font-bold">hello</p>
          <p className="text-sm text-zinc-400">hello@mail.com</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2 mt-4">
        <a href="#" className="hover:bg-zinc-800 p-2 rounded">Home</a>
        <a href="#" className="hover:bg-zinc-800 p-2 rounded">Tasks</a>
        <a href="#" className="hover:bg-zinc-800 p-2 rounded">Work</a>
        <a href="#" className="hover:bg-zinc-800 p-2 rounded">Plan</a>
      </nav>

      <button className="mt-auto bg-red-600 hover:bg-red-700 p-2 rounded">
        Exit
      </button>
    </aside>
  );
};

export default Sidebar;
