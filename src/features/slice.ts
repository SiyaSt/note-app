import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "shared/types/note";
import { formatDate } from "shared/utils/FormatDate";

export interface State {
  notes: Note[];
  selectedNote: Note | null;
  isEditing: boolean;
  isAddFormOpen: boolean;
}

const initialState: State = {
  notes: JSON.parse(localStorage.getItem("notes") || "[]"),
  selectedNote: null,
  isAddFormOpen: false,
  isEditing: false,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (
      state,
      action: PayloadAction<{ title: string; description: string }>,
    ) => {
      const newNote: Note = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        date: formatDate(new Date()),
      };
      state.notes.push(newNote);
      localStorage.setItem("notes", JSON.stringify(state.notes));
      state.isAddFormOpen = false;
    },
    editNote: (
      state,
      action: PayloadAction<{ title: string; description: string }>,
    ) => {
      if (state.selectedNote) {
        state.notes = state.notes.map((note) =>
          note.id === state.selectedNote!.id
            ? { ...note, ...action.payload, date: formatDate(new Date()) }
            : note,
        );
        localStorage.setItem("notes", JSON.stringify(state.notes));
        state.selectedNote = null;
        state.isEditing = false;
        state.isAddFormOpen = false;
      }
    },
    deleteNote: (state) => {
      if (state.selectedNote) {
        state.notes = state.notes.filter(
          (note) => note.id !== state.selectedNote!.id,
        );
        localStorage.setItem("notes", JSON.stringify(state.notes));
        state.selectedNote = null;
        state.isEditing = false;
      }
    },
    setSelectedNote: (state, action: PayloadAction<Note | null>) => {
      state.selectedNote = action.payload;
    },
    setAdding: (state, action: PayloadAction<boolean>) => {
      state.isAddFormOpen = action.payload;
      state.isEditing = false;
      state.selectedNote = null;
    },
    setEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
  },
});

export const {
  addNote,
  editNote,
  deleteNote,
  setSelectedNote,
  setAdding,
  setEditing,
} = notesSlice.actions;
export default notesSlice.reducer;
