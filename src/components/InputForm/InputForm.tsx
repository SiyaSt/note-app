import { Button, Card, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal.tsx";
import { useEffect, useState } from "react";
import { ButtonGroup } from "components/ButtonGroup/ButtonGroup.tsx";
import { Note } from "shared/types/note.ts";
import { formatDate } from "shared/utils/FormatDate.ts";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks.ts";
import { selectNotes } from "features/selector.ts";
import { addNote, deleteNote, editNote } from "features/actions.ts";

export const InputForm = () => {
  const { selectedNote, isEditing } = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();
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

    dispatch(addNote(newNote));
    setTitle("");
    setDescription("");
  };
  const handleEdit = () => {
    if (title.trim() === "") {
      setShowAlertTitle(true);
      return;
    }

    if (selectedNote) {
      dispatch(
        editNote({
          ...selectedNote,
          title,
          description,
          date: formatDate(new Date()),
        }),
      );
      setTitle("");
      setDescription("");
    }
  };

  const handleDelete = () => {
    setShowAlertClose(true);
  };

  const confirmDelete = () => {
    if (selectedNote) {
      dispatch(deleteNote(selectedNote.id));
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
