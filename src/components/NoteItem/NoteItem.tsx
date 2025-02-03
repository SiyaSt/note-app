import { Button, Card } from "react-bootstrap";
import "./NoteItem.scss";
import { CustomModal } from "components/CustomModal/CustomModal.tsx";
import { useState } from "react";

export const NoteItem = () => {
  const [show, setShow] = useState(false);

  return (
    <Card>
      <Card.Header>
        <h3></h3>
      </Card.Header>
      <Card.Body className="note-item-body">
        <small className="text-muted last-edited">Last edited: {}</small>
        <div className="button-group">
          <Button variant="danger" className="delete-button">
            Delete Note
          </Button>
          <Button variant="success" className="edit-button">
            Edit Note
          </Button>
          <CustomModal
            title="Delet Note"
            description="Are you sure you want to delet note?"
            show={show}
            setShow={setShow}
          />
        </div>
      </Card.Body>
    </Card>
  );
};
