// src/components/NoteCard.jsx
import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";


const NoteCard = ({ title, description, isSelected, onSelect, onEdit, onDelete }) => {
  
  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    
    <div 
      className={`
        relative bg-white rounded-lg shadow-md p-4 flex flex-col h-40 
        cursor-pointer transition-all duration-200 border-2
        ${isSelected ? 'border-indigo-500 shadow-indigo-200' : 'border-transparent hover:shadow-xl'}
      `}
      onClick={onSelect}
    >
      
      <h3 className="font-bold text-lg text-gray-800 truncate mb-2">{title}</h3>

      <div className="flex-1 overflow-hidden">
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>

      
      <div className="absolute bottom-3 right-3 flex space-x-2">
        <button
          className="text-gray-400 hover:text-blue-500 text-lg transition-colors"
          onClick={handleEditClick}
          title="Edit"
        >
          <FaEdit />
        </button>
        <button
          className="text-gray-400 hover:text-red-500 text-lg transition-colors"
          onClick={handleDeleteClick}
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;