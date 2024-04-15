type SidebarProps = {
  notes: Note[];
  currentNote: Note;
  setCurrentNoteId: (id: string) => void;
  newNote: () => void;
  deleteNoteById: (noteIdToDelete: string) => void;
};

type Note = {
  id?: string;
  body: string;
  createdAt: number;
  updatedAt: number;
};

type UpdateNoteFunction = (text: string) => void;

export type { Note, UpdateNoteFunction, SidebarProps };
