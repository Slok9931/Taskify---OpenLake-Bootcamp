// src/components/TodoForm.jsx

import React, { useState, useEffect } from "react";

const TodoForm = ({ selectedDate, onAddTodo }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    if (selectedDate) {
      setFormData((prev) => ({
        ...prev,
        date: selectedDate.toISOString().split("T")[0],
      }));
    }
  }, [selectedDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(formData); // send form data to parent
    setFormData({ title: "", description: "", date: selectedDate.toISOString().split("T")[0] });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
    >
      <h2 className="text-lg font-semibold text-indigo-600 mb-4 text-center">Add New Task</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          required
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          required
          className="w-full px-4 py-2 border rounded-xl resize-y focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
