import { Col, Container, Row } from "react-bootstrap";
import bidone from "/404 error.webp";
import "../App.css";
import "../NotFound.css";

const NotFound = () => (
  <Container className="not-found-container">
    <Row>
      <Col xs={12} md={6} className="mx-auto text-center">
        <img className="w-100" src={bidone} alt="not-found" />
        <h2 className="mt-2">404 - Qualcosa è andato storto</h2>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
