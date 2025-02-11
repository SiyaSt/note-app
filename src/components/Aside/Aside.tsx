import { Button, Card } from "react-bootstrap";
import { NoteList } from "components";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";
import { setAdding } from "features/actions";

export const Aside = () => {
  const dispatch = useAppDispatch();
  const { isAddFormOpen } = useAppSelector(selectNotes);

  return (
    <Card>
      <Card.Header>
        <Button
          className="m-2"
          onClick={() => dispatch(setAdding(!isAddFormOpen))}
          variant={isAddFormOpen ? "danger" : "success"}
        >
          {isAddFormOpen ? "Close Add Note Form" : "Add Note"}
        </Button>
      </Card.Header>
      <Card.Body>
        <NoteList />
      </Card.Body>
    </Card>
  );
};
