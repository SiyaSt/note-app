import { Col, Row } from "react-bootstrap";
import { Aside, NoteItem, InputForm } from "components";
import { useNotes } from "hooks/useNotes";

export const Main = () => {
  const { state } = useNotes();

  return (
    <Row className="p-3 m-3">
      <Col xs={12} md={3}>
        <Aside />
      </Col>
      <Col xs={12} md={9}>
        {(state.showAddForm || state.isEditing) && <InputForm />}
        {!state.showAddForm && !state.isEditing && state.selectedNote && (
          <NoteItem />
        )}
      </Col>
    </Row>
  );
};
