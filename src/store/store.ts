import { createStore } from "redux";
import { notesReducer } from "features/reducer";

export const store = createStore(notesReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
