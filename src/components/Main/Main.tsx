import { Col, Row } from "react-bootstrap";
import { Aside } from "components/Aside/Aside.tsx";

export const Main = () => {
  return (
    <Row className="p-3 m-3">
      <Col xs={12} md={3}>
        <Aside />
      </Col>
      <Col xs={12} md={9}></Col>
    </Row>
  );
};
