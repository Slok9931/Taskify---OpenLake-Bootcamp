import React, { useState } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
function TodoCard({todo,onToggleComplete,onDelete,onEdit}) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    if (!todo) {
        return null;
    }
    const handleEditClick = () => {
        onEdit(todo);
        setIsPopoverOpen(false); 
    };

    const handleDeleteClick = () => {
        onDelete(todo.id);
        setIsPopoverOpen(false); 
    };
    return (
        <div className={`flex items-center p-4 bg-gray-500 rounded-lg shadow-lg mb-4 gap-4 ${todo.completed ? 'opacity-60' : ''}`}>
            <input type="checkbox" className="h-6 w-6 text-blue-500 bg-gray-700 border-gray-300 focus:ring-blue-600" 
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
            />
            <div className="flex-grow">
                <h4 className={`text-lg font-bold text-white ${todo.completed ? 'line-through' : ''}`}>{todo.title}</h4>
                <p className="text-sm text-black">{todo.description}</p>
            </div>
            <div className="hidden md:flex gap-3">
                <button onClick={handleEditClick} className="text-black hover:text-white" title="Edit"><FaPencilAlt /></button>
                <button onClick={handleDeleteClick} className="text-black hover:text-white" title="Delete"><FaTrash /></button>
            </div>
            <div className="relative md:hidden">
                <button onClick={() => setIsPopoverOpen(!isPopoverOpen)} className="text-black hover:text-white p-2 rounded-full hover:bg-gray-600">
                <BsThreeDotsVertical size={20} /></button>

                {isPopoverOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-gray-800 rounded-md shadow-lg z-10 text-sm">
                    <ul className="py-1">
                        <li>
                            <button onClick={handleEditClick} className="flex items-center gap-2 w-full px-2 py-1 text-white hover:bg-gray-600 rounded" title="Edit"><FaPencilAlt/></button>
                        </li>
                        <li>
                            <button onClick={handleDeleteClick} className="flex items-center gap-2 w-full px-2 py-1 text-white hover:bg-gray-600 rounded"><FaTrash/></button>
                        </li>
                    </ul>
                </div>
            )}
            </div>
        </div>
    );
}
export default TodoCard;
