import { Note } from "shared/types/note";

export type Action =
  | { type: "SET_EDITING"; payload: boolean }
  | { type: "SET_SHOW_ADD_FORM"; payload: boolean }
  | { type: "SET_SELECTED_NOTE"; payload: Note | null }
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "EDIT_NOTE"; payload: Note }
  | { type: "DELETE_NOTE"; payload: number };

export const setEditing = (isEditing: boolean): Action => ({
  type: "SET_EDITING",
  payload: isEditing,
});
export const setShowAddForm = (show: boolean): Action => ({
  type: "SET_SHOW_ADD_FORM",
  payload: show,
});
export const setSelectedNote = (note: Note | null): Action => ({
  type: "SET_SELECTED_NOTE",
  payload: note,
});
export const addNote = (note: Note): Action => ({
  type: "ADD_NOTE",
  payload: note,
});
export const editNote = (note: Note): Action => ({
  type: "EDIT_NOTE",
  payload: note,
});
export const deleteNote = (id: number): Action => ({
  type: "DELETE_NOTE",
  payload: id,
});
