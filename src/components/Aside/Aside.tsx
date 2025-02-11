import { Button, Card } from "react-bootstrap";
import { NoteList } from "components";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";
import { setShowAddForm } from "features/actions";

export const Aside = () => {
  const dispatch = useAppDispatch();
  const { showAddForm } = useAppSelector(selectNotes);

  return (
    <Card>
      <Card.Header>
        <Button
          className="m-2"
          onClick={() => dispatch(setShowAddForm(!showAddForm))}
          variant={showAddForm ? "danger" : "success"}
        >
          {showAddForm ? "Close Add Note Form" : "Add Note"}
        </Button>
      </Card.Header>
      <Card.Body>
        <NoteList />
      </Card.Body>
    </Card>
  );
};
