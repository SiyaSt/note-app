import { Button, Card } from "react-bootstrap";
import { NoteList } from "components";
import { useNotes } from "hooks/useNotes";

export const Aside = () => {
  const { state, dispatch } = useNotes();
  return (
    <Card>
      <Card.Header>
        <Button
          className="m-2"
          onClick={() =>
            dispatch({ type: "SET_ADDING", payload: !state.isAddFormOpen })
          }
          variant={state.isAddFormOpen ? "danger" : "success"}
        >
          {state.isAddFormOpen ? "Close Add Note Form" : "Add Note"}
        </Button>
      </Card.Header>
      <Card.Body>
        <NoteList />
      </Card.Body>
    </Card>
  );
};
