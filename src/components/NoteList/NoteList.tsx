import { ListGroup } from "react-bootstrap";
import { useNotes } from "hooks/useNotes";

export const NoteList = () => {
  const { state, dispatch } = useNotes();

  return (
    <ListGroup>
      {state.notes.length === 0 ? (
        <p>There are no notes</p>
      ) : (
        state.notes.map((note) => (
          <div className="custom-note-item" key={note.id}>
            <ListGroup.Item
              action
              className="note-item"
              active={state.selectedNote?.id === note.id}
              onClick={() =>
                dispatch({ type: "SET_SELECTED_NOTE", payload: note })
              }
            >
              <div className="fw-bold">{note.title}</div>
              <small className="fst-italic">
                {note.date.replace(/ at.*$/, "")}
              </small>
            </ListGroup.Item>
          </div>
        ))
      )}
    </ListGroup>
  );
};
