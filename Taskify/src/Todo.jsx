import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TodoForm from "./components/TodoForm";

const LOCAL_STORAGE_KEY = "taskify.todos";

const Todo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const filteredTodos = todos.filter(
    (todo) => new Date(todo.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-8">

        {/* Left: Calendar + TodoForm */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">Select a Date</h2>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="rounded-xl border-none"
            />
            <p className="text-sm text-gray-500 mt-2">
              Selected: {selectedDate.toDateString()}
            </p>
          </div>

          <TodoForm selectedDate={selectedDate} onAddTodo={handleAddTodo} />
        </div>

        {/* Right: Tasks */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-xl shadow-sm overflow-auto">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Tasks for {selectedDate.toDateString()}
          </h2>

          {filteredTodos.length > 0 ? (
            <ul className="space-y-4">
              {filteredTodos.map((todo, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
                >
                  <h3 className="text-md font-medium text-gray-800">{todo.title}</h3>
                  <p className="text-sm text-gray-500">{todo.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No tasks for this date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
