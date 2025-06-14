const NoteCard = ({ title, description, onClick }) => {
  return (
    <div
      className="bg-white shadow rounded p-4 min-h-[150px] w-full cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 truncate">{description}</p>
    </div>
  );
};

export default NoteCard;
