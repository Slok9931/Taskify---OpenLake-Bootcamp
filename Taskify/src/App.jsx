import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login"
import Todo from "./Todo"
import Signup from "./Signup";
import Note from "./Note";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/note" element={<Note />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
