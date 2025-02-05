import { Button, Card, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal";
import { FC, useEffect, useState } from "react";
import { ButtonGroup } from "components/ButtonGroup/ButtonGroup";

interface InputFormProps {
  isEditing: boolean;
  onAddNode: (title: string, description: string) => void;
  onEditNode: (title: string, description: string) => void;
  onDeleteNote: () => void;
  initialTitle: string;
  initialDescription: string;
}

export const InputForm: FC<InputFormProps> = ({
  isEditing,
  onEditNode,
  onAddNode,
  onDeleteNote,
  initialDescription,
  initialTitle,
}) => {
  const [showAlertTitle, setShowAlertTitle] = useState(false);
  const [showAlertClose, setShowAlertClose] = useState(false);

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  useEffect(() => {
    if (isEditing) {
      setTitle(initialTitle);
      setDescription(initialDescription);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [isEditing, initialTitle, initialDescription]);

  const handleAdd = () => {
    if (title === "") {
      setShowAlertTitle(true);
    } else {
      onAddNode(title, description);
      setTitle("");
      setDescription("");
    }
  };

  const handleEdit = () => {
    if (title === "") {
      setShowAlertTitle(true);
    } else {
      onEditNode(title, description);
      setTitle("");
      setDescription("");
    }
  };
  const handleDelete = () => {
    setShowAlertClose(true);
  };

  return (
    <Card>
      <Card.Header>Add Note</Card.Header>
      <Container className="p-2 pt-4">
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="noteTitle">
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="noteDescription">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="text-end">
            {isEditing ? (
              <ButtonGroup
                textButtonFirst="Delete Note"
                textButtonSecond="Save Note"
                onClickFirst={handleDelete}
                onClickSecond={handleEdit}
              />
            ) : (
              <Button variant="success" onClick={handleAdd}>
                Save Note
              </Button>
            )}

            <CustomModal
              title="No title"
              description="Title is needed"
              show={showAlertTitle}
              setShow={setShowAlertTitle}
              onClick={() => {}}
            />
            <CustomModal
              title="Delet Note"
              description="Are you sure you want to delet note?"
              show={showAlertClose}
              setShow={setShowAlertClose}
              onClick={onDeleteNote}
            />
          </Col>
        </Row>
      </Container>
    </Card>
  );
};
