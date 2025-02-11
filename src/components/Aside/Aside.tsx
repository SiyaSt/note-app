import { Button, Card } from "react-bootstrap";
import { FC } from "react";
import { NoteList } from "components";
import { Note } from "shared/types/note";

interface AsideProps {
  notes: Note[];
  selectedNote: Note | null;
  showAddForm: boolean;
  setShowAddForm: (showAddForm: boolean) => void;
  onSelectNote: (note: Note) => void;
}
export const Aside: FC<AsideProps> = ({
  notes,
  showAddForm,
  setShowAddForm,
  onSelectNote,
  selectedNote,
}) => {
  return (
    <Card>
      <Card.Header>
        <Button
          className="m-2"
          onClick={() => {
            setShowAddForm(!showAddForm);
          }}
          variant={showAddForm ? "danger" : "success"}
        >
          {showAddForm ? "Close Add Note Form" : "Add Note"}
        </Button>
      </Card.Header>
      <Card.Body>
        <NoteList
          notes={notes}
          onSelectNote={onSelectNote}
          selectedNote={selectedNote}
        />
      </Card.Body>
    </Card>
  );
};
