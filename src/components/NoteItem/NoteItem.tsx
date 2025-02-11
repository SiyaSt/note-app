import { Card } from "react-bootstrap";
import { CustomModal, ButtonGroup } from "components";
import { useState } from "react";
import { useNotes } from "hooks/useNotes";
import "./NoteItem.scss";

export const NoteItem = () => {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useNotes();

  const handleCancel = () => {
    setShow(false);
  };

  const handleConfirmDelete = () => {
    if (state.selectedNote) {
      dispatch({ type: "DELETE_NOTE", payload: state.selectedNote.id });
      setShow(false);
    }
  };
  return (
    <Card>
      <Card.Header>
        <h3>{state.selectedNote?.title}</h3>
      </Card.Header>
      <Card.Body className="note-item-body">
        <small className="text-muted last-edited">
          Last edited: {state.selectedNote?.date}
        </small>
        <p>{state.selectedNote?.description}</p>
        <ButtonGroup
          textButtonFirst="Delete Note"
          textButtonSecond="Edit Note"
          onClickFirst={() => setShow(true)}
          onClickSecond={() => {
            dispatch({ type: "SET_EDITING", payload: true });
          }}
        />
        <CustomModal
          title={"Delete Note"}
          description={"Are you sure you want to delete note?"}
          show={show}
          onCancel={handleCancel}
          onConfirm={handleConfirmDelete}
          close={true}
        />
      </Card.Body>
    </Card>
  );
};
