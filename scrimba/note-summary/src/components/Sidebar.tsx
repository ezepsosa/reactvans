import { Note, SidebarProps } from "../types/Types";

export default function Sidebar({
  currentNote,
  newNote,
  notes,
  setCurrentNoteId,
  deleteNoteById,
}: SidebarProps) {
  const noteElements = notes.map((note: Note) => (
    <div key={note.id}>
      <div
        className={`title ${note.id === currentNote.id ? "selected-note" : ""}`}
        onClick={() => setCurrentNoteId(note.id!)}
      >
        <h4 className="text-snippet">Note {note.body.split("\n")[0]}</h4>
        <button className="delete-btn" onClick={() => deleteNoteById(note.id!)}>
          <i className="gg-trash gg-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
