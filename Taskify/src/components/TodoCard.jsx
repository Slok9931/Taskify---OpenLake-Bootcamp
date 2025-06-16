import React, { useState, useEffect, useRef } from 'react';
import { Pencil, Trash2, MoreVertical, Check, X } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

const dummyTodos = [
  {
    id: 1,
    title: 'Learn Tailwind CSS ,React',
    description: 'go through docs and videos',
    completed: true,
  },
  {
    id: 2,
    title: 'create Todo App',
    description: 'complete frontend(using react,tailwind css)',
    completed: false,
  },
  {
    id: 3,
    title: 'Check features',
    description: 'Go through app and check whether all the required features present or not',
    completed: false,
  },
];

export default function TodoCard() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [popoverId, setPopoverId] = useState(null);
  const popoverRef = useRef(null);

  useEffect(() => {
    setTodos(dummyTodos);
  }, []);

  useEffect(() => {
    if (popoverId === null) return;

    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setPopoverId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [popoverId]);

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setPopoverId(null);
  };

  const startEdit = (todo) => {
    setEditingTodo({ ...todo });
    setPopoverId(null);
  };

  const cancelEdit = () => setEditingTodo(null);

  const saveEdit = () => {
    if (!editingTodo || !editingTodo.title.trim()) return;
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editingTodo.id ? editingTodo : todo
      )
    );
    setEditingTodo(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient px-4 py-8">
      <Fade triggerOnce cascade direction="up" duration={500}>
        <div className="relative group bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-lg transition-all duration-500 ease-in-out hover:scale-[1.02]">
          <div className="absolute inset-1 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 border-indigo-500 group-hover:shadow-[0_0_30px_5px_rgba(99,102,241,0.7)] z-[-1]" />

          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Today's Tasks</h1>

          <div className="space-y-4">
            {todos.map((todo) => (
              <div key={todo.id} className="bg-gray-100 p-4 rounded-xl shadow-sm transition-all duration-300">
                {editingTodo?.id === todo.id ? (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      value={editingTodo.title}
                      onChange={(e) => setEditingTodo({ ...editingTodo, title: e.target.value })}
                      className="w-full p-2 text-lg font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <textarea
                      value={editingTodo.description}
                      onChange={(e) => setEditingTodo({ ...editingTodo, description: e.target.value })}
                      className="w-full p-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      rows="3"
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button onClick={cancelEdit} className="p-2 text-gray-300 hover:text-gray-600" title="Cancel">
                        <X size={20} />
                      </button>
                      <button onClick={saveEdit} className="p-2 text-green-400 hover:text-green-700" title="Save">
                        <Check size={20} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                      className="h-6 w-6 mt-1 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    />
                    <div className={`flex-grow ${todo.completed ? 'text-gray-400' : 'text-gray-800'}`}>
                      <h4 className={`text-lg font-semibold ${todo.completed ? 'line-through' : ''}`}>
                        {todo.title}
                      </h4>
                      <p className="text-sm">{todo.description}</p>
                    </div>

                    <div className="hidden md:flex gap-1 flex-shrink-0">
                      <button onClick={() => startEdit(todo)} className="p-2 text-gray-400 hover:text-indigo-600" title="Edit">
                        <Pencil size={18} />
                      </button>
                      <button onClick={() => deleteTodo(todo.id)} className="p-2 text-gray-400 hover:text-red-600" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="relative md:hidden flex-shrink-0">
                      <button
                        onClick={() => setPopoverId(popoverId === todo.id ? null : todo.id)}
                        className="p-2 text-gray-500 hover:text-gray-800"
                      >
                        <MoreVertical size={20} />
                      </button>
                      {popoverId === todo.id && (
                        <div
                          ref={popoverRef}
                          className="absolute right-0 top-full mt-2 w-32 bg-white rounded-md shadow-lg z-10 border"
                        >
                          <ul className="py-1">
                            <li>
                              <button
                                onClick={() => startEdit(todo)}
                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                <Pencil size={16} /> Edit
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => deleteTodo(todo.id)}
                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                              >
                                <Trash2 size={16} /> Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {todos.length === 0 && (
              <p className="text-center text-gray-500 py-4">All tasks are completed!</p>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}
