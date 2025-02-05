import { Button, Card } from "react-bootstrap";
import { NoteList } from "components";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";
import { setShowAddForm } from "features/slice";
import "./Aside.scss";

export const Aside = () => {
  const dispatch = useAppDispatch();
  const { notes } = useAppSelector(selectNotes);

  return (
    <Card>
      <Card.Header>
        <Button
          className="m-2"
          onClick={() => dispatch(setShowAddForm(!notes.showAddForm))}
          variant={notes.showAddForm ? "danger" : "success"}
        >
          {notes.showAddForm ? "Close Add Note Form" : "Add Note"}
        </Button>
      </Card.Header>
      <Card.Body>
        <NoteList />
      </Card.Body>
    </Card>
  );
};
