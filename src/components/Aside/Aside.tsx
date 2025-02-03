import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import "./Aside.scss";
import { NoteList } from "components/NoteList/NoteList.tsx";

export const Aside = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <Card>
      <Card.Header>
        <Button
          className="m-2"
          onClick={() => {
            setShowAddForm((prev) => !prev);
          }}
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
