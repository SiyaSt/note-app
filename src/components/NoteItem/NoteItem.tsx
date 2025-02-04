import { Button, Card } from "react-bootstrap";
import "./NoteItem.scss";
import { CustomModal } from "components/CustomModal/CustomModal.tsx";
import { FC, useState } from "react";
import { Note } from "shared/types/note.ts";

interface NoteItemProps {
  note: Note;
  setIsEditing: (IsEditing: boolean) => void;
  onDeleteNote: () => void;
}

export const NoteItem: FC<NoteItemProps> = ({
  note,
  onDeleteNote,
  setIsEditing,
}) => {
  const [show, setShow] = useState(false);

  return (
    <Card>
      <Card.Header>
        <h3>{note.title}</h3>
      </Card.Header>
      <Card.Body className="note-item-body">
        <small className="text-muted last-edited">
          Last edited: {note.date}
        </small>
        <p>{note.description}</p>
        <div className="button-group">
          <Button
            variant="danger"
            className="delete-button"
            onClick={() => setShow(true)}
          >
            Delete Note
          </Button>
          <Button
            variant="success"
            className="edit-button"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit Note
          </Button>
          <CustomModal
            title="Delet Note"
            description="Are you sure you want to delet note?"
            show={show}
            setShow={setShow}
            onClick={onDeleteNote}
          />
        </div>
      </Card.Body>
    </Card>
  );
};
