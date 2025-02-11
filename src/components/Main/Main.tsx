import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Note } from "shared/types/note";
import { NoteItem, Aside, InputForm } from "components";
import { formatDate } from "shared/utils/FormatDate";

export const Main = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAddForm, setIsAddForm] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [notes, setNotes] = useState<Note[]>(
    JSON.parse(localStorage.getItem("notes") || "[]"),
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (title: string, description: string) => {
    const newNote = {
      id: Date.now(),
      title,
      description,
      date: formatDate(new Date()),
    };
    setNotes([...notes, newNote]);
    setIsAddForm(false);
  };

  const handleEditNote = (title: string, description: string) => {
    if (selectedNote) {
      setNotes(
        notes.map((note) =>
          note.id === selectedNote.id
            ? { ...note, title, description, date: formatDate(new Date()) }
            : note,
        ),
      );
    }
    setIsEditing(false);
    setIsAddForm(false);
    setSelectedNote(null);
  };

  const handleDeleteNote = () => {
    if (selectedNote) {
      setNotes(notes.filter((note) => note.id !== selectedNote.id));
      setSelectedNote(null);
      setIsEditing(false);
    }
  };

  const handleSelectNote = (note: Note) => {
    setSelectedNote(note);
  };

  return (
    <Row className="p-3 m-3">
      <Col xs={12} md={3}>
        <Aside
          notes={notes}
          selectedNote={selectedNote}
          onSelectNote={handleSelectNote}
          setShowAddForm={setIsAddForm}
          showAddForm={isAddForm}
        />
      </Col>
      <Col xs={12} md={9}>
        {(isAddForm || isEditing) && (
          <InputForm
            isEditing={isEditing}
            onAddNode={handleAddNote}
            onEditNode={handleEditNote}
            onDeleteNote={handleDeleteNote}
            initialTitle={selectedNote?.title || ""}
            initialDescription={selectedNote?.description || ""}
          />
        )}
        {!isAddForm && !isEditing && selectedNote && (
          <NoteItem
            note={selectedNote}
            setIsEditing={setIsEditing}
            onDeleteNote={handleDeleteNote}
          />
        )}
      </Col>
    </Row>
  );
};
