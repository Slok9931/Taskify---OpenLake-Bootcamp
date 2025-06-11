import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() && !description.trim()) {
      alert("Please enter a title or description.");
      return;
    }
    onAddNote({ title, description, id: Date.now() });
    setTitle('');
    setDescription('');
  };

  return (

    <div className="min-h-screen flex items-center justify-center animated-gradient px-4">
      <Fade triggerOnce direction="up" duration={500}>

        <div className="relative group bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-2xl transition-all duration-500 ease-in-out hover:scale-[1.02]">


          <div className="absolute inset-1 rounded-2xl border-2 opacity-0 group-hover:opacity-200 transition-all duration-500 border-indigo-500 group-hover:shadow-[0_0_30px_5px_rgba(99,102,241,0.7)] z-[-1]" />

          <form onSubmit={handleSubmit} className="flex flex-col">

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                text-3xl font-bold text-gray-800
                bg-transparent border-none focus:outline-none focus:ring-0
                w-full mb-3 placeholder-gray-400
              "
            />


            <textarea
              placeholder="Take a note..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="8"
              className="
                text-base text-gray-700
                bg-transparent border-none focus:outline-none focus:ring-0
                w-full resize-y placeholder-gray-400
              "
            />


            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="
                  px-6 py-2 bg-indigo-600 text-white font-semibold
                  rounded-xl shadow-sm
                  hover:bg-indigo-700 focus:outline-none focus:ring-2
                  focus:ring-indigo-500 focus:ring-opacity-50
                  transition-colors duration-300
                "
              >
                Add Note
              </button>
            </div>
          </form>
        </div>
      </Fade>
    </div>
  );
};

export default NoteForm;