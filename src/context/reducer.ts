import { Action } from "context/actions";
import { Note } from "shared/types/note";

export interface State {
  notes: Note[];
  selectedNote: Note | null;
  isEditing: boolean;
  showAddForm: boolean;
}

export const notesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
        showAddForm: false,
      };
    case "EDIT_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === state.selectedNote?.id
            ? { ...note, ...action.payload }
            : note,
        ),
        selectedNote: null,
        isEditing: false,
        showAddForm: false,
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== state.selectedNote?.id),
        selectedNote: null,
        isEditing: false,
      };
    case "SET_SELECTED_NOTE":
      return { ...state, selectedNote: action.payload };
    case "SET_SHOW_ADD_FORM":
      return {
        ...state,
        showAddForm: action.payload,
        isEditing: false,
        selectedNote: null,
      };
    case "SET_EDITING":
      return { ...state, isEditing: action.payload };
    default:
      return state;
  }
};
