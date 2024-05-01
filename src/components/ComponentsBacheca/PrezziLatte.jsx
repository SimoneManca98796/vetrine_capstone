import React, { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown, Spinner, Table } from "react-bootstrap";
import { format } from "date-fns";
import itLocale from "date-fns/locale/it";

const PrezziLatte = () => {
  const [loading, setLoading] = useState(true);
  const [prezzi, setPrezzi] = useState([]);
  const [language, setLanguage] = useState("Sardegna");
  const [currentDate, setCurrentDate] = useState(new Date());

  const caricaDati = () => {
    setTimeout(() => {
      setPrezzi([
        {
          prodotto: "Pecorino",
          prezzo: "14 €/kg",
          varPerc: "0%",
          data: "01/05/24",
          luogo: "Siena",
        },
        {
          prodotto: "Latte",
          prezzo: "1,40 €/L",
          varPerc: "0%",
          data: "01/05/24",
          luogo: "Siena",
        },
        {
          prodotto: "Caciotta",
          prezzo: "10 €/kg",
          varPerc: "0%",
          data: "26/04/24",
          luogo: "Firenze",
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    caricaDati();

    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(dateInterval);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <Container>
      <Row className="mb-4 mt-5">
        <Col xs={12} sm={6}>
          <h2>PREZZI DEL LATTE</h2>
        </Col>
        <Col
          xs={12}
          sm={6}
          className="d-flex justify-content-end align-items-center"
        >
          <span className="me-3">
            {format(currentDate, "dd/MM/yyyy HH:mm", { locale: itLocale })}
          </span>
          <Dropdown>
            <Dropdown.Toggle variant="primary">{language}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLanguageChange("Sardegna")}>
                Sardegna
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguageChange("Italia")}>
                Italia
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleLanguageChange("Stati Uniti")}
              >
                Stati Uniti
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLanguageChange("Francia")}>
                Francia
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
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Luogo</th>
                    <th>Prodotto</th>
                    <th>Prezzo</th>
                    <th>Variazione</th>
                  </tr>
                </thead>
                <tbody>
                  {prezzi.map((item, index) => (
                    <tr key={index}>
                      <td>{item.data}</td>
                      <td>{item.luogo}</td>
                      <td>{item.prodotto}</td>
                      <td>{item.prezzo}</td>
                      <td>{item.varPerc}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PrezziLatte;
