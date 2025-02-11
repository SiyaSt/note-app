import { ListGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks.ts";
import { selectNotes } from "features/selector.ts";
import { setSelectedNote } from "features/actions.ts";
import "./NoteList.scss";

export const NoteList = () => {
  const { notes, selectedNote } = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  return (
    <ListGroup>
      {notes.length === 0 ? (
        <p>There are no notes</p>
      ) : (
        notes.map((note) => (
          <div className="custom-note-item" key={note.id}>
            <ListGroup.Item
              action
              className="note-item"
              active={selectedNote?.id === note.id}
              onClick={() => dispatch(setSelectedNote(note))}
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
