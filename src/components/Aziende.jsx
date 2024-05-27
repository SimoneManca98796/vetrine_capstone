import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAziende,
  createAzienda,
  deleteAzienda,
} from "../redux/actions/index";
import { Card, Button, Modal, Form, Alert } from "react-bootstrap";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Aziende.css";

const Aziende = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const aziende = useSelector((state) => state.aziende.allAziende);
  const user = useSelector((state) => state.auth.user);

  console.log("User from Redux:", user);

  const [showModal, setShowModal] = useState(false);
  const [newAzienda, setNewAzienda] = useState({
    name: "",
    description: "",
    tipo: "",
    contatto: "",
    dettagli: "",
    categoria: "Richiedente",
    userId: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.classList.add("aziende");
    return () => {
      document.body.classList.remove("aziende");
    };
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/FormLogin");
    } else {
      dispatch(fetchAziende());
    }
  }, [isAuthenticated, dispatch, navigate]);

  useEffect(() => {
    console.log("User from Redux:", user);
    if (user && user.id) {
      setNewAzienda((prevState) => ({
        ...prevState,
        userId: user.id,
      }));
    } else {
      console.error("ID utente non disponibile.");
    }
  }, [user]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setNewAzienda({
      ...newAzienda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newAzienda.contatto) {
      setError("È necessario fornire un contatto (telefono o email).");
      return;
    }
    setError("");

    const aziendaData = { ...newAzienda, userId: user.id };

    console.log("Submitting new azienda with userId:", aziendaData);
    dispatch(createAzienda(aziendaData));
    setNewAzienda({
      name: "",
      description: "",
      tipo: "",
      contatto: "",
      dettagli: "",
      categoria: "Richiedente",
      userId: user.id,
    });
    handleCloseModal();
  };

  const handleDelete = (id, isOwn) => {
    if (isOwn) {
      if (window.confirm("Sei sicuro di voler rimuovere il tuo annuncio?")) {
        dispatch(deleteAzienda(id));
      }
    } else {
      dispatch(deleteAzienda(id));
    }
  };

  const myAziende = aziende.filter((azienda) => azienda.userId === user.id);
  const otherAziende = aziende.filter((azienda) => azienda.userId !== user.id);

  return (
    <div className="aziende-container">
      <div className="aziende-description-section">
        <div className="aziende-description-content">
          <h1 className="mb-3">Annunci Aziende</h1>
          <p className="description">
            Qui puoi trovare e pubblicare annunci per offerte di lavoro,
            collaborazioni e vendite di prodotti delle aziende agricole.
          </p>
        </div>
        <div className="aziende-description-image">
          <img
            src="/Annunci.png"
            alt="Aziende Introduzione"
            className="aziende-description-img"
          />
        </div>
      </div>
      <Button
        variant="primary"
        onClick={handleShowModal}
        className="aziende-btn mb-3"
      >
        <FaPlus /> Aggiungi Annuncio
      </Button>

      <h2>I miei annunci</h2>
      <div className="row">
        {myAziende.map((azienda) => (
          <div className="col-md-4 mb-4" key={azienda.id}>
            <Card className="aziende-card">
              <Card.Body>
                <Card.Title className="aziende-card-title">
                  {azienda.name}
                </Card.Title>
                <Card.Text className="aziende-card-text">
                  {azienda.description}
                  <br />
                  Tipo: {azienda.tipo}
                  <br />
                  Contatto: {azienda.contatto}
                  <br />
                  Categoria: {azienda.categoria}
                  <br />
                  {azienda.dettagli ? (
                    <>
                      Dettagli: {azienda.dettagli}
                      <br />
                    </>
                  ) : null}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(azienda.id, true)}
                >
                  <FaTrashAlt /> Elimina
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <h2>Altri annunci</h2>
      <div className="row">
        {otherAziende.map((azienda) => (
          <div className="col-md-4 mb-4" key={azienda.id}>
            <Card className="aziende-card">
              <Card.Body>
                <Card.Title className="aziende-card-title">
                  {azienda.name}
                </Card.Title>
                <Card.Text className="aziende-card-text">
                  {azienda.description}
                  <br />
                  Tipo: {azienda.tipo}
                  <br />
                  Contatto: {azienda.contatto}
                  <br />
                  Categoria: {azienda.categoria}
                  <br />
                  {azienda.dettagli ? (
                    <>
                      Dettagli: {azienda.dettagli}
                      <br />
                    </>
                  ) : null}
                </Card.Text>
                {user.role === "ADMIN" && (
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(azienda.id, false)}
                  >
                    <FaTrashAlt /> Elimina
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton className="aziende-modal-header">
          <Modal.Title>Aggiungi Annuncio</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="aziende-modal-content">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formName">
              <Form.Label className="aziende-form-label">Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newAzienda.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label className="aziende-form-label">
                Descrizione
              </Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newAzienda.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formTipo">
              <Form.Label className="aziende-form-label">Tipo</Form.Label>
              <Form.Control
                type="text"
                name="tipo"
                value={newAzienda.tipo}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formContatto">
              <Form.Label className="aziende-form-label">
                Contatto (Telefono o Email)
              </Form.Label>
              <Form.Control
                type="text"
                name="contatto"
                value={newAzienda.contatto}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCategoria">
              <Form.Label className="aziende-form-label">Categoria</Form.Label>
              <Form.Control
                as="select"
                name="categoria"
                value={newAzienda.categoria}
                onChange={handleChange}
                required
              >
                <option value="Richiedente">Richiedente</option>
                <option value="Proponente">Proponente</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDettagli">
              <Form.Label className="aziende-form-label">
                Dettagli Aggiuntivi
              </Form.Label>
              <Form.Control
                as="textarea"
                name="dettagli"
                value={newAzienda.dettagli}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="aziende-modal-footer">
            <Button variant="secondary" onClick={handleCloseModal}>
              Chiudi
            </Button>
            <Button variant="primary" type="submit" className="aziende-btn">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Aziende;
