import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Spinner,
  ListGroup,
} from "react-bootstrap";
import { format } from "date-fns";
import itLocale from "date-fns/locale/it";

const PrezziOvini = () => {
  const [loading, setLoading] = useState(true);
  const [prezzi, setPrezzi] = useState({});
  const [language, setLanguage] = useState("Italia");
  const [currentDate, setCurrentDate] = useState(new Date());

  const caricaDati = () => {
    setTimeout(() => {
      setPrezzi({
        agnello: "12 €/kg",
        pecora: "8 €/kg",
      });
      setLoading(false);
    }, 2000); // Ritardo di 2 secondi
  };

  useEffect(() => {
    caricaDati();

    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Aggiorna la data ogni secondo

    return () => clearInterval(dateInterval);
  }, []);

  const handleLanguageChange = (lang) => setLanguage(lang);

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>PREZZI DEGLI OVINI</h2>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <span className="me-3">
            {format(currentDate, "dd/MM/yyyy HH:mm", { locale: itLocale })}
          </span>
          <Dropdown>
            <Dropdown.Toggle variant="primary">{language}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLanguageChange("Italia")}>
                Italia
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguageChange("Francia")}>
                Francia
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguageChange("Spagna")}>
                Spagna
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <ListGroup className="gap-2">
              <ListGroup.Item>Agnello: {prezzi.agnello}</ListGroup.Item>
              <ListGroup.Item>Pecora: {prezzi.pecora}</ListGroup.Item>
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PrezziOvini;
