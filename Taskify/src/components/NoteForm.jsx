import React, { useState } from 'react';

const NoteForm = () => {
 
  const [title, Title] = useState('');
  const [description, Description] = useState('');

  const OnSubmit = (event) => {
    event.preventDefault(); 

    if (!title.trim() && !description.trim()) {
      alert('Please enter a title or description.');
      return;
    }
    
    
    console.log({
      title,
      description,
    });
    
   
    Title('');
    Description('');
  };

  return (
   
    <div className="bg-yellow-200 rounded-lg shadow-xl p-8 w-full max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add a Task</h1>
      
      <form onSubmit={OnSubmit} className="flex flex-col gap-3">
        
        <div>
          <label htmlFor="title" className="sr-only">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => Title(e.target.value)}
            placeholder="Title"
            className="w-full p-3 bg-orange-50 text-gray-800 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

       
        <div>
          <label htmlFor="description" className="sr-only">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => Description(e.target.value)}
            placeholder="Task"
            rows="8"
            className="w-full p-3 bg-orange-50 text-gray-800 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
          />
        </div>

       
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;