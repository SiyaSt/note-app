import { Col, Row } from "react-bootstrap";
import { Aside } from "components/Aside/Aside.tsx";
import { InputForm } from "components/InputForm/InputForm.tsx";
import { NoteItem } from "components/NoteItem/NoteItem.tsx";
import { useAppSelector } from "hooks/reduxHooks.ts";
import { selectNotes } from "features/selector.ts";

export const Main = () => {
  const { showAddForm, isEditing, selectedNote } = useAppSelector(selectNotes);

  return (
    <Row className="p-3 m-3">
      <Col xs={12} md={3}>
        <Aside />
      </Col>
      <Col xs={12} md={9}>
        {(showAddForm || isEditing) && <InputForm />}
        {!showAddForm && !isEditing && selectedNote && <NoteItem />}
      </Col>
    </Row>
  );
};
