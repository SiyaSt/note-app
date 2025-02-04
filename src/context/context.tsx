import { createContext, Dispatch } from "react";
import { State } from "context/reducer.ts";
import { Action } from "context/actions.ts";

export interface NotesContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

export const NotesContext = createContext<NotesContextType | undefined>(
  undefined,
);
