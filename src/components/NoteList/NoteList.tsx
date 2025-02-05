import { ListGroup } from "react-bootstrap";
import { Note } from "shared/types/note";
import { FC } from "react";
import "./NoteList.scss";

interface NoteListProps {
  notes: Note[];
  selectedNote: Note | null;
  onSelectNote: (note: Note) => void;
}

export const NoteList: FC<NoteListProps> = ({
  notes,
  onSelectNote,
  selectedNote,
}) => {
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
              onClick={() => onSelectNote(note)}
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
