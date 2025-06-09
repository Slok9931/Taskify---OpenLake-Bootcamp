import './index.css';
import TodoCard from './components/TodoCard';

function App() {
  const sampleTodo1 = {
    id: 1,
    title: 'task-1',
    description: 'Complete all the steps in the task-1.',
    completed: false,
  };
  const sampleTodo2 = {
    id: 2,
    title: 'task-2',
    description: 'Complete all the steps in the task-2.',
    completed: true,
  };
  const handleToggleComplete = (todoId) => {
    console.log(`Toggling completion status for todo #${todoId}`);
  };
  const handleDelete = (todoId) => {
    console.log(`Deleting todo #${todoId}`);
  };
  const handleEdit = (todo) => {
    console.log('Editing todo:', todo);
  };

  return (
    <div className="bg-gray-300 min-h-screen p-8">
      <div className="max-w-xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">Taskify Todo's</h1>
        <div className="space-y-4">
          <TodoCard 
          todo={sampleTodo1}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
          onEdit={handleEdit}
           />
          <TodoCard 
          todo={sampleTodo2}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
          onEdit={handleEdit}
           /> 
        </div>
      </div>
    </div>  
  );
}

export default App;
