import { Col, Container, Row } from "react-bootstrap";
import bidone from "/404 error.webp";

const NotFound = () => (
  <Container>
    <Row>
      <Col xs={12} md={6}>
        <img className="w-100" src={bidone} alt="not-found" />
        <h2 className="mt-2 text-center">404 - Qualcosa è andato storto</h2>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
