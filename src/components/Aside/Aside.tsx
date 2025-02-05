import { Button, Card } from "react-bootstrap";
import { NoteList } from "components";
import { useNotes } from "hooks/useNotes";
import "./Aside.scss";

export const Aside = () => {
  const { state, dispatch } = useNotes();
  return (
    <Card>
      <Card.Header>
        <Button
          className="m-2"
          onClick={() =>
            dispatch({ type: "SET_SHOW_ADD_FORM", payload: !state.showAddForm })
          }
          variant={state.showAddForm ? "danger" : "success"}
        >
          {state.showAddForm ? "Close Add Note Form" : "Add Note"}
        </Button>
      </Card.Header>
      <Card.Body>
        <NoteList />
      </Card.Body>
    </Card>
  );
};
