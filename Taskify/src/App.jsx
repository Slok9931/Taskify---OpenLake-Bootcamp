
// function App() {

//   return (
//     <div>Hello</div>
//   )
// }

// export default App
import NoteCard from "./components/NoteCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <NoteCard
        title="Meeting with Team"
        description={`This is a sample description of the note. 
        It is intentionally long to test the scroll functionality inside the NoteCard. 
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        Keep adding more lines to see how it scrolls inside the card without affecting the title.
        `}
        
        onEdit={() => alert("Edit clicked!")}
        onDelete={() => alert("Delete clicked!")}
      />
    </div>
  );
}

export default App;
