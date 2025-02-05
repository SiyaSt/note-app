import { Note } from "shared/types/note";

export type Action =
  | { type: "SET_EDITING"; payload: boolean }
  | { type: "SET_SHOW_ADD_FORM"; payload: boolean }
  | { type: "SET_SELECTED_NOTE"; payload: Note | null }
  | { type: "SET_NOTES"; payload: Note[] }
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "EDIT_NOTE"; payload: Note }
  | { type: "DELETE_NOTE"; payload: number };
