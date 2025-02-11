import { Card } from "react-bootstrap";
import { CustomModal, ButtonGroup } from "components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";
import { deleteNote, setEditing } from "features/actions";
import "./NoteItem.scss";

export const NoteItem = () => {
  const [show, setShow] = useState(false);
  const { selectedNote } = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    setShow(false);
  };

  const handleConfirmDelete = () => {
    if (selectedNote) {
      dispatch(deleteNote(selectedNote.id));
      setShow(false);
    }
  };
  return (
    <Card>
      <Card.Header>
        <h3>{selectedNote?.title}</h3>
      </Card.Header>
      <Card.Body className="note-item-body">
        <small className="text-muted last-edited">
          Last edited: {selectedNote?.date}
        </small>
        <p>{selectedNote?.description}</p>
        <ButtonGroup
          textButtonFirst="Delete Note"
          textButtonSecond="Edit Note"
          onClickFirst={() => setShow(true)}
          onClickSecond={() => {
            dispatch(setEditing(true));
          }}
        />
        <CustomModal
          title="Delet Note"
          description="Are you sure you want to delet note?"
          show={show}
          onCancel={handleCancel}
          onConfirm={handleConfirmDelete}
          close={true}
        />
      </Card.Body>
    </Card>
  );
};
