import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Spinner,
  ListGroup,
} from "react-bootstrap";

const PrezziLatte = () => {
  const [loading, setLoading] = useState(true);
  const [prezzi, setPrezzi] = useState({});

  // Funzione simulata per caricare i dati delle API
  const caricaDati = () => {
    setTimeout(() => {
      setPrezzi({
        pecorino: "10 €/kg",
        latte: "1 €/L",
      });
      setLoading(false);
    }, 2000); // Simuliamo un ritardo di 2 secondi
  };

  React.useEffect(() => {
    caricaDati();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2>PREZZI DEL LATTE</h2>
          <Dropdown>
            <Dropdown.Toggle variant="primary">Italiano</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Italiano</Dropdown.Item>
              <Dropdown.Item>Français</Dropdown.Item>
              <Dropdown.Item>Español</Dropdown.Item>
              {/* Aggiungi altre lingue se necessario */}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <ListGroup>
              <ListGroup.Item>Pecorino: {prezzi.pecorino}</ListGroup.Item>
              <ListGroup.Item>Latte: {prezzi.latte}</ListGroup.Item>
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PrezziLatte;
