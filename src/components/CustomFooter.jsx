import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <footer
      className="text-light text-center py-4 mt-5 foot"
      style={{ backgroundColor: "#0085B5" }}
    >
      <Container>
        <Row className="mb-4">
          <Col>
            <i className="bi bi-facebook me-3 icon"></i>
            <i className="bi bi-twitter me-3 icon"></i>
            <i className="bi bi-instagram me-3 icon"></i>
            <i className="bi bi-youtube icon"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="list-unstyled">
              <li>Carousel Home</li>
              <li>Descrizione Pagina</li>
              <li>Info</li>
              <li>Licenze</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Media Social</li>
              <li>Relazioni</li>
              <li>Terze Parti</li>
              <li>Termini</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Privacy</li>
              <li>Legalità Pagina</li>
              <li>Cookie Preferences</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Contattaci</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>Contattaci</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col>
            <p className="mb-2">Servizi agricoli</p>
            <p>&copy; 2024 Simone Manca | Vetrine Agricole</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default CustomFooter;
