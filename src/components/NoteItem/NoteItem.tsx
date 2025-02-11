import { Card } from "react-bootstrap";
import { CustomModal, ButtonGroup } from "components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";
import { deleteNote, setEditing } from "features/slice";
import "./NoteItem.scss";

export const NoteItem = () => {
  const [show, setShow] = useState(false);
  const { notes } = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    setShow(false);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteNote());
    setShow(false);
  };
  return (
    <Card>
      <Card.Header>
        <h3>{notes.selectedNote?.title}</h3>
      </Card.Header>
      <Card.Body className="note-item-body">
        <small className="text-muted last-edited">
          Last edited: {notes.selectedNote?.date}
        </small>
        <p>{notes.selectedNote?.description}</p>
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
          close={false}
        />
      </Card.Body>
    </Card>
  );
};
