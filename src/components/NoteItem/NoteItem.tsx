import { Card } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal.tsx";
import { useState } from "react";
import { ButtonGroup } from "components/ButtonGroup/ButtonGroup.tsx";
import "./NoteItem.scss";

export const NoteItem = () => {
  const [show, setShow] = useState(false);

  return (
    <Card>
      <Card.Header>
        <h3></h3>
      </Card.Header>
      <Card.Body className="note-item-body">
        <small className="text-muted last-edited">Last edited: {}</small>
        <ButtonGroup />
        <CustomModal
          title="Delet Note"
          description="Are you sure you want to delet note?"
          show={show}
          setShow={setShow}
        />
      </Card.Body>
    </Card>
  );
};
