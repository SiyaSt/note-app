import { Button, Card, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { CustomModal } from "components/CustomModal/CustomModal.tsx";
import { useState } from "react";

export const InputForm = () => {
  const [show, setShow] = useState(false);

  return (
    <Card>
      <Card.Header>Add Note</Card.Header>
      <Container className="p-2 pt-4">
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="noteTitle">
                <Form.Control type="text" placeholder="Enter title" value="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="noteDescription">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value=""
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="text-end">
            <Button variant="success">Save Note</Button>
            <CustomModal
              title="No title"
              description="Title is needed"
              show={show}
              setShow={setShow}
            />
          </Col>
        </Row>
      </Container>
    </Card>
  );
};
