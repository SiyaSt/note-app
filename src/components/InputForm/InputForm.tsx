import { Button, Card, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal.tsx";
import { useEffect, useState } from "react";
import { ButtonGroup } from "components/ButtonGroup/ButtonGroup.tsx";
import { useNotes } from "hooks/useNotes.tsx";
import { Note } from "shared/types/note.ts";
import { formatDate } from "shared/utils/FormatDate.ts";

export const InputForm = () => {
  const { state, dispatch } = useNotes(); // Получаем состояние и dispatch из контекста
  const { selectedNote, isEditing } = state;

  const [showAlertTitle, setShowAlertTitle] = useState(false);
  const [showAlertClose, setShowAlertClose] = useState(false);

  const [title, setTitle] = useState(selectedNote?.title || "");
  const [description, setDescription] = useState(
    selectedNote?.description || "",
  );

  useEffect(() => {
    if (isEditing && selectedNote) {
      setTitle(selectedNote.title);
      setDescription(selectedNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [isEditing, selectedNote]);

  const handleAdd = () => {
    if (title.trim() === "") {
      setShowAlertTitle(true);
      return;
    }
    const newNote: Note = {
      id: Date.now(),
      title,
      description,
      date: formatDate(new Date()),
    };

    dispatch({ type: "ADD_NOTE", payload: newNote });
    setTitle("");
    setDescription("");
  };
  const handleEdit = () => {
    if (title.trim() === "") {
      setShowAlertTitle(true);
      return;
    }

    if (selectedNote) {
      dispatch({
        type: "EDIT_NOTE",
        payload: {
          ...selectedNote,
          title,
          description,
          date: formatDate(new Date()),
        },
      });
      setTitle("");
      setDescription("");
    }
  };

  const handleDelete = () => {
    setShowAlertClose(true);
  };

  const confirmDelete = () => {
    if (selectedNote) {
      dispatch({ type: "DELETE_NOTE", payload: selectedNote.id });
    }
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
