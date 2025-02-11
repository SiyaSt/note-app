import { Button, Card } from "react-bootstrap";
import { NoteList } from "components";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";
import { setAdding } from "features/slice";
import "components/NoteList/NoteList.scss";

export const Aside = () => {
  const dispatch = useAppDispatch();
  const { notes } = useAppSelector(selectNotes);

  return (
    <Card>
      <Card.Header>
        <Button
          className="m-2"
          onClick={() => dispatch(setAdding(!notes.isAddFormOpen))}
          variant={notes.isAddFormOpen ? "danger" : "success"}
        >
          {notes.isAddFormOpen ? "Close Add Note Form" : "Add Note"}
        </Button>
      </Card.Header>
      <Card.Body>
        <NoteList />
      </Card.Body>
    </Card>
  );
};
