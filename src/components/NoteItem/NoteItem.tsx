import { Card } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal.tsx";
import { useState } from "react";
import { ButtonGroup } from "components/ButtonGroup/ButtonGroup.tsx";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks.ts";
import { selectNotes } from "features/selector.ts";
import { deleteNote, setEditing } from "features/actions.ts";
import "./NoteItem.scss";

export const NoteItem = () => {
  const [show, setShow] = useState(false);
  const { selectedNote } = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();

  const confirmDelete = () => {
    if (selectedNote) {
      dispatch(deleteNote(selectedNote.id));
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
          setShow={setShow}
          onClick={confirmDelete}
        />
      </Card.Body>
    </Card>
  );
};
