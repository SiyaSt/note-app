import { Button, Card, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal";
import { useEffect, useState } from "react";
import { ButtonGroup } from "components/ButtonGroup/ButtonGroup";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";
import { addNote, deleteNote, editNote } from "features/slice";

export const InputForm = () => {
  const { notes } = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();
  const [showAlertTitle, setShowAlertTitle] = useState(false);
  const [showAlertClose, setShowAlertClose] = useState(false);

  const [title, setTitle] = useState(notes.selectedNote?.title || "");
  const [description, setDescription] = useState(
    notes.selectedNote?.description || "",
  );

  useEffect(() => {
    if (notes.isEditing && notes.selectedNote) {
      setTitle(notes.selectedNote.title);
      setDescription(notes.selectedNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [notes.isEditing, notes.selectedNote]);

  const handleAdd = () => {
    if (title.trim() === "") {
      setShowAlertTitle(true);
      return;
    }

    dispatch(addNote({ title, description }));
    setTitle("");
    setDescription("");
  };
  const handleEdit = () => {
    if (title.trim() === "") {
      setShowAlertTitle(true);
      return;
    }

    dispatch(editNote({ title, description }));
    setTitle("");
    setDescription("");
  };

  const handleDelete = () => {
    setShowAlertClose(true);
  };

  const confirmDelete = () => {
    dispatch(deleteNote());
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
            {notes.isEditing ? (
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
              title="Delete Note"
              description="Are you sure you want to delete this note?"
              show={showAlertClose}
              setShow={setShowAlertClose}
              onClick={confirmDelete}
            />
          </Col>
        </Row>
      </Container>
    </Card>
  );
};
