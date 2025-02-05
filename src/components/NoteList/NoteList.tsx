import { ListGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";
import { setSelectedNote } from "features/slice";

export const NoteList = () => {
  const { notes } = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  return (
    <ListGroup>
      {notes.notes.length === 0 ? (
        <p>There are no notes</p>
      ) : (
        notes.notes.map((note) => (
          <div className="custom-note-item" key={note.id}>
            <ListGroup.Item
              action
              className="note-item"
              active={notes.selectedNote?.id === note.id}
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
