import { Card } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal";
import { useState } from "react";
import { ButtonGroup } from "components/ButtonGroup/ButtonGroup";
import { useNotes } from "hooks/useNotes";
import "./NoteItem.scss";

export const NoteItem = () => {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useNotes();

  const confirmDelete = () => {
    if (state.selectedNote) {
      dispatch({ type: "DELETE_NOTE", payload: state.selectedNote.id });
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
