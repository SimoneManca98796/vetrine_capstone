import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaSeedling, FaHammer, FaDog, FaTools } from "react-icons/fa";
import Carrello from "./Carrello"; // Assicurati che il percorso sia corretto
import "../App.css";
import "../Prodotti.css";

const Prodotti = () => {
  const cartItems = useSelector((state) => state.carrello.cart);

  return (
    <Container className="prodotti-container mt-4">
      {/* Sezione introduttiva */}
      <Row className="align-items-center mb-4">
        <Col md={8}>
          <h3 className="prodotti-titolo">Prodotti del Mercato</h3>
          <p className="prodotti-descrizione">
            Esplora e partecipa alla vendita di una vasta gamma di prodotti. Che
            tu sia interessato a piantine, prodotti artigianali o animali, il
            nostro mercato ha qualcosa da offrirti.
          </p>
        </Col>
        <Col md={4}>
          <img
            src="/pastoriProdotti.webp"
            alt="Introduzione al Mercato"
            className="img-fluid rounded prodotti-immagine"
          />
        </Col>
      </Row>

      {/* Sezione opzioni di pagamento */}
      <Row className="mb-4">
        <Col>
          <h4>Opzioni di Pagamento</h4>
          <p>Puoi effettuare pagamenti con le seguenti modalità:</p>
          <ul>
            <li>Abbonamenti mensili o annuali</li>
            <li>Acquisti una tantum</li>
          </ul>
          <p>
            <strong>Prova gratuita:</strong> Iscriviti ora e usufruisci di un
            periodo di prova gratuito di 14 giorni. Dopo il periodo di prova,
            verrà addebitato il costo dell&apos;abbonamento scelto.
          </p>
          <p>
            <strong>Politica di rimborso:</strong> Puoi richiedere un rimborso
            entro 30 giorni dall&apos;acquisto.
          </p>
        </Col>
      </Row>

      {/* Tabella dei prodotti */}
      <Row>
        <Col>
          <Table hover className="prodotti-tabella">
            <thead className="sticky-header">
              <tr>
                <th>Categoria</th>
                <th>Descrizione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <Link to="/Piantine">
                    <Button
                      variant="success"
                      className="rounded-circle prodotti-bottone"
                    >
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
                <td className="align-middle text-success">
                  <FaSeedling className="categoria-icon" />
                  <span className="categoria-descrizione">
                    Piantine e Ortaggi
                  </span>
                  <p>Compra o vendi le tue piantine e ortaggi qui!</p>
                </td>
              </tr>

              <tr>
                <td className="text-center">
                  <Link to="/Artigianali">
                    <Button
                      variant="warning"
                      className="rounded-circle prodotti-bottone"
                    >
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
                <td className="align-middle text-warning">
                  <FaHammer className="categoria-icon" />
                  <span className="categoria-descrizione">
                    Prodotti Artigianali
                  </span>
                  <p>Compra o vendi i tuoi prodotti artigianali qui!</p>
                </td>
              </tr>

              <tr>
                <td className="text-center">
                  <Link to="/Animali">
                    <Button
                      variant="info"
                      className="rounded-circle prodotti-bottone"
                    >
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
                <td className="align-middle text-info">
                  <FaDog className="categoria-icon" />
                  <span className="categoria-descrizione">Animali</span>
                  <p>Scopri e partecipa alla vendita di animali qui!</p>
                </td>
              </tr>

              <tr>
                <td className="text-center">
                  <Link to="/Attrezzature">
                    <Button
                      variant="secondary"
                      className="rounded-circle prodotti-bottone"
                    >
                      <img
                        src="/Grigio.png"
                        alt="Attrezzature"
                        width="50"
                        height="50"
                        className="rounded-circle"
                      />
                    </Button>
                  </Link>
                </td>
                <td className="align-middle text-secondary">
                  <FaTools className="categoria-icon" />
                  <span className="categoria-descrizione">
                    Attrezzature & Utensili
                  </span>
                  <p>Compra o vendi attrezzature e utensili qui!</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Carrello */}
      <Carrello />
    </Container>
  );
};

export default Prodotti;
