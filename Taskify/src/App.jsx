import React, { useState } from 'react';
import CreateTask from './components/NoteForm';
import './index.css'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (newTask) => {

    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log('New task added:', newTask);
  };

  return (
    <div className="task-container">
    <main>
        <CreateTask AddTask={handleAddTask} />
        <div className="task-list">
          <h2>Your Tasks</h2>
          {tasks.length === 0 ? (
            <p>No tasks yet. Add one above!</p>
          ) : (
            tasks.map(task => (
              <div key={task.id} className="task-item">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
