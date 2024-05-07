import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <footer
      className="text-light text-center py-3 mt-5"
      style={{ backgroundColor: "#0085B5" }}
    >
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <ul className="list-unstyled">
              <li>Descrizione Pagina</li>
              <li>Info</li>
              <li>Licenze</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <ul className="list-unstyled">
              <li>Privacy</li>
              <li>Legalità Pagina</li>
              <li>Cookie Preferences</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <p>Contattami:</p>
            <img
              src="/logo facebook.png"
              alt="Facebook"
              className="social-icon me-2"
              width="24"
              height="24"
            />
            <img
              src="/logo insta.png"
              alt="Instagram"
              className="social-icon me-2"
              width="24"
              height="24"
            />
            <img
              src="/logo github.png"
              alt="GitHub"
              className="social-icon me-2"
              width="24"
              height="24"
            />
            <img
              src="/logo linkedin.png"
              alt="LinkedIn"
              className="social-icon"
              width="24"
              height="24"
            />
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
