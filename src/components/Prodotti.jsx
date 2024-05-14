import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";

const Prodotti = () => {
  return (
    <Container className="mt-4">
      {/* Sezione introduttiva */}
      <Row className="align-items-center mb-4">
        <Col md={8}>
          <h3>Prodotti del Mercato</h3>
          <p>
            Esplora e partecipa alla vendita di una vasta gamma di prodotti. Che
            tu sia interessato a piantine, prodotti artigianali o animali, il
            nostro mercato ha qualcosa da offrirti.
          </p>
        </Col>
        <Col md={4}>
          <img
            src="/pastoriProdotti.webp"
            alt="Introduzione al Mercato"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
      {/* Tabella dei prodotti */}
      <Row>
        <Col>
          <table className="table table-hover">
            <tbody>
              <tr>
                <td className="text-center">
                  <h4>Piantine e Ortaggi</h4>
                  <Link to="/Piantine">
                    <Button variant="success" className="rounded-circle">
                      <img
                        src="/Verde.png"
                        alt="Piantine"
                        width="50"
                        height="50"
                        className="rounded-circle"
                      />
                    </Button>
                  </Link>
                </td>
                <td className="align-middle">
                  Compra o vendi le tue piantine e ortaggi qui!
                </td>
              </tr>

              <tr>
                <td className="text-center">
                  <h4>Prodotti Artigianali</h4>
                  <Link to="/Artigianali">
                    <Button variant="warning" className="rounded-circle">
                      <img
                        src="/Giallo.png"
                        alt="Artigianato"
                        width="50"
                        height="50"
                        className="rounded-circle"
                      />
                    </Button>
                  </Link>
                </td>
                <td className="align-middle">
                  Compra o vendi i tuoi prodotti artigianali qui!
                </td>
              </tr>

              <tr>
                <td className="text-center">
                  <h4>Animali</h4>
                  <Link to="/Animali">
                    <Button variant="info" className="rounded-circle">
                      <img
                        src="/Blu.png"
                        alt="Animali"
                        width="50"
                        height="50"
                        className="rounded-circle"
                      />
                    </Button>
                  </Link>
                </td>
                <td className="align-middle">
                  Scopri e partecipa alla vendita di animali qui!
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <h4>Attrezzature&Utensili</h4>
                  <Link to="/Attrezzature">
                    <Button variant="success" className="rounded-circle">
                      <img
                        src="/Grigio.png"
                        alt="Piantine"
                        width="50"
                        height="50"
                        className="rounded-circle"
                      />
                    </Button>
                  </Link>
                </td>
                <td className="align-middle">
                  Compra o vendi attrezzature&utensili qui!
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Prodotti;
