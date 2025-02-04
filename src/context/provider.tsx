import { ReactNode, useEffect, useReducer } from "react";
import { notesReducer } from "context/reducer.ts";
import { NotesContext } from "context/context.tsx";

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notesReducer, {
    notes: JSON.parse(localStorage.getItem("notes") || "[]"),
    selectedNote: null,
    isEditing: false,
    showAddForm: false,
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
  }, [state.notes]);

  return <NotesContext.Provider value={{ state, dispatch }}>{children}</NotesContext.Provider>;
};