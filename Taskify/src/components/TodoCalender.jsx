import React, { useState } from "react";

const TodoCalender = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState({});

  const handleAddTask = () => {
    if (!selectedDate || !task) return;

    const newTodos = { ...todos };
    if (!newTodos[selectedDate]) {
      newTodos[selectedDate] = [];
    }
    newTodos[selectedDate].push(task);
    setTodos(newTodos);
    setTask("");
  };

  return (
    <div className="w-full mx-auto max-w-sm p-4 bg-white rounded-lg shadow-md text-sm">
      <h1 className="text-lg font-semibold text-center mb-3">📅 Todo Calendar</h1>

      <div className="space-y-3">
        <div>
          <label className="block text-gray-700 mb-1">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border px-2 py-1 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
            className="w-full border px-2 py-1 rounded-md"
          />
        </div>

        <button
          onClick={handleAddTask}
          className="w-full bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>

      {Object.keys(todos).length > 0 && (
        <div className="mt-4">
          <h2 className="text-base font-semibold mb-2">📝 Tasks</h2>
          <div className="space-y-2">
            {Object.entries(todos).map(([date, tasks]) => (
              <div key={date} className="bg-gray-100 p-2 rounded-md">
                <p className="font-medium text-blue-800 mb-1">{date}</p>
                <ul className="list-disc list-inside space-y-1">
                  {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoCalender;
