import { createContext, Dispatch } from "react";
import { State } from "context/reducer";
import { Action } from "context/actions";

export interface NotesContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

export const NotesContext = createContext<NotesContextType | undefined>(
  undefined,
);
