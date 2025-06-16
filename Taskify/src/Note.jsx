import { useState, useEffect } from "react";
import NoteCard from "./components/NoteCard";
import Note_form from "./components/Note_form";
import NoteEditForm from "./components/NoteEditForm";

export default function Note() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleUpdate = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(updatedNote);
    setEditMode(false);
  };

  return (
  <div className="h-screen bg-gradient-to-tr from-purple-600 via-purple-500 to-blue-500 p-8 flex justify-center items-center">
    <div className="flex w-full max-w-7xl h-full bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-1/2 bg-blue-100 p-4 overflow-hidden">
        <h2 className="text-xl font-bold mb-4">Add Note</h2>
        <Note_form onAdd={(note) => setNotes([...notes, note])} />
      </div>

      {/* Right Side - Notes */}
      <div className="relative w-1/2 bg-green-100 p-4 overflow-y-scroll">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              description={note.description}
              onClick={() => {
                setSelectedNote(note);
                setEditMode(false);
              }}
            />
          ))}
        </div>

        {/* Expandable Panel */}
        {selectedNote && (
          <div className="absolute top-1/4 right-0 w-3/4 h-1/2 bg-white shadow-lg rounded-xl p-6 transition-all duration-300">
            {editMode ? (
              <NoteEditForm
                note={selectedNote}
                onSave={handleUpdate}
                onCancel={() => setEditMode(false)}
              />
            ) : (
              <>
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold">{selectedNote.title}</h2>
                  <button
                    className="text-red-500 font-bold"
                    onClick={() => setSelectedNote(null)}
                  >
                    ✕
                  </button>
                </div>
                <p className="mt-4 text-gray-700">{selectedNote.description}</p>
                <div className="mt-6 flex gap-4">
                  <button
                    className="bg-yellow-400 px-4 py-2 rounded"
                    onClick={() => setEditMode(true)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(selectedNote.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);
}
