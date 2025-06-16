import { useState } from "react";

const NoteEditForm = ({ note, onSave, onCancel }) => {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const handleSave = (e) => {
    e.preventDefault();
    onSave({ ...note, title, description });
  };

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="flex gap-4">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteEditForm;
