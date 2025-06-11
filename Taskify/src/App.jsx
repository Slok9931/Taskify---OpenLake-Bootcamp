import React from "react";
import Sidebar from "./components/sidebar.jsx";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-zinc-100 p-6">
        <h1 className="text-2xl font-bold">Taskify Dashboard</h1>
      </main>
    </div>
  );
}

export default App;
