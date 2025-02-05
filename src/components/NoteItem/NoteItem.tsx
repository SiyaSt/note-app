import { Card } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal";
import { useState } from "react";
import { ButtonGroup } from "components/ButtonGroup/ButtonGroup";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";
import { deleteNote, setEditing } from "features/slice";
import "./NoteItem.scss";

export const NoteItem = () => {
  const [show, setShow] = useState(false);
  const { notes } = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  const confirmDelete = () => {
    dispatch(deleteNote());
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
          setShow={setShow}
          onClick={confirmDelete}
        />
      </Card.Body>
    </Card>
  );
};
