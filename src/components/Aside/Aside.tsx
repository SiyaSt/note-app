import { Button, Card } from "react-bootstrap";
import { NoteList } from "components/NoteList/NoteList.tsx";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks.ts";
import { selectNotes } from "features/selector.ts";
import { setShowAddForm } from "features/actions.ts";
import "./Aside.scss";

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
