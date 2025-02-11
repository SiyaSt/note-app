import { Card } from "react-bootstrap";
import { CustomModal, ButtonGroup } from "components";
import { FC, useState } from "react";
import { Note } from "shared/types/note";
import "./NoteItem.scss";

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

  const handleCancel = () => {
    setShow(false);
  };

  const handleConfirm = () => {
    onDeleteNote();
    setShow(false);
  };

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
        <ButtonGroup
          textButtonFirst={"Delete Note"}
          textButtonSecond={"Edit Note"}
          onClickFirst={() => setShow(true)}
          onClickSecond={() => {
            setIsEditing(true);
          }}
        />
        <CustomModal
          title={"Delete Note"}
          description={"Are you sure you want to delete note?"}
          show={show}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </Card.Body>
    </Card>
  );
};
