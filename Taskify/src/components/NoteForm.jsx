import React, { useState } from 'react';

function Note({ AddTask }) {
    const [title, Title] = useState('');
    const [description, Description] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title.trim()) {
            alert('Please enter a title for the task.');
            return;
        }
        AddTask({
            title: title,
            description: description,

            id: Date.now()
        });
        Title('');
        Description('');
    };

    return (

        <form onSubmit={handleSubmit} className="Noteform">
            <h1>Create a New Task</h1>
            <input
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => Title(e.target.value)}
                required
            />
            <textarea
                placeholder="Enter task description"
                value={description}
                onChange={(e) => Description(e.target.value)}
                rows="4"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default Note;