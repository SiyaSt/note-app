import { Col, Row } from "react-bootstrap";
import { Aside, InputForm, NoteItem } from "components";
import { useAppSelector } from "hooks/reduxHooks";
import { selectNotes } from "features/selector";

export const Main = () => {
  const { notes } = useAppSelector(selectNotes);

  return (
    <Row className="p-3 m-3">
      <Col xs={12} md={3}>
        <Aside />
      </Col>
      <Col xs={12} md={9}>
        {(notes.showAddForm || notes.isEditing) && <InputForm />}
        {!notes.showAddForm && !notes.isEditing && notes.selectedNote && (
          <NoteItem />
        )}
      </Col>
    </Row>
  );
};
