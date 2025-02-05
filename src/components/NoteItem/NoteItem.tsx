import { Card } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal";
import { FC, useState } from "react";
import { Note } from "shared/types/note";
import { ButtonGroup } from "components/ButtonGroup/ButtonGroup";
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
          textButtonFirst="Delete Note"
          textButtonSecond="Edit Note"
          onClickFirst={() => setShow(true)}
          onClickSecond={() => {
            setIsEditing(true);
          }}
        />
        <CustomModal
          title="Delet Note"
          description="Are you sure you want to delet note?"
          show={show}
          setShow={setShow}
          onClick={onDeleteNote}
        />
      </Card.Body>
    </Card>
  );
};
