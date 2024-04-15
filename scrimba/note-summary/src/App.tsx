import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { Note } from "./types/Types";
import Split from "react-split";
import { addDoc, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db, notesCollection } from "./firebase";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNoteId, setCurrentNoteId] = useState("");
  const [tempNoteText, setTempNoteText] = useState("");

  const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);

  const currentNote: Note =
    notes.find((note) => {
      return note.id === currentNoteId;
    }) || notes[0];

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (tempNoteText !== currentNote.body) {
        updateNote(tempNoteText);
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  });

  useEffect(() => {
    if (notes.length > 0 && !currentNoteId) {
      setCurrentNoteId(notes[0].id!);
    }
  }, [currentNoteId, notes]);

  useEffect(() => {
    if (currentNote) setTempNoteText(currentNote.body);
  }, [currentNote]);

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      const notesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt,
        updatedAt: doc.data().updatedAt,
        body: doc.data().body,
      }));

      setNotes(() => {
        return notesArr;
      });
    });
    return unsubscribe;
  }, []);

  async function createNewNote() {
    const newNote: Note = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const newNoteRef = await addDoc(notesCollection, newNote);
    newNote.id = newNoteRef.id;
    setCurrentNoteId(newNoteRef.id);
  }

  async function deleteNote(noteIdToDelete: string) {
    const docRef = doc(db, "notes", noteIdToDelete);
    await deleteDoc(docRef);
  }

  async function updateNote(text: string) {
    const docRef = doc(db, "notes", currentNoteId);

    await setDoc(
      docRef,
      { body: text, updatedAt: Date.now() },
      { merge: true },
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={sortedNotes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNoteById={deleteNote}
          />

          <Editor tempNote={tempNoteText} setTempNote={setTempNoteText} />
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
