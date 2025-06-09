// src/components/NoteCard.jsx

import { FaTrash, FaEdit } from "react-icons/fa";

const NoteCard = ({ title, description, onEdit, onDelete }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-4 w-120 h-100 flex flex-col">
      <br /><br />
      <div className="text-3xl font-extrabold mb-2 text-center">
  <span className="text-4xl mr-2">✍️</span>{title}<span className="text-4xl mr-2">📝</span>
</div>
<br />

      <div className="flex-1 overflow-y-auto pr-1 text-sm text-gray-700">
        {description}
      </div>

      <div className="absolute top-2 right-2 flex space-x-2">
        <button
          className="text-blue-500 hover:text-blue-700 text-2xl"
          onClick={onEdit}
          title="Edit"
        >
          <FaEdit />
        </button>
        <button
          className="text-red-500 hover:text-red-700 text-2xl"
          onClick={onDelete}
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
