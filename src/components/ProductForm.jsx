import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { createProduct } from "../redux/actions/index";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../ProductForm.css";

const ProductForm = ({ category }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token non trovato nel localStorage");
      return;
    }

    // Upload dell'immagine
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);

    try {
      const uploadResponse = await axios.post(
        "https://vetrine-agricole-6d661b03a449.herokuapp.com/api/products/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const imageUrl = uploadResponse.data.imageUrl;

      const productData = {
        name,
        description,
        price: parseFloat(price),
        imageUrl,
        categoryName: category,
      };

      // Invia i dati del prodotto al server
      dispatch(createProduct(productData));
    } catch (error) {
      console.error(
        "Errore nel caricamento dell'immagine o nell'invio del prodotto:",
        error
      );
    }
  };

  return (
    <Container className="product-form-container mt-4 mb-4">
      <h2>Aggiungi Prodotto</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCategory">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" value={category} readOnly required />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formDescription">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descrizione"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPrice">
              <Form.Label>Prezzo</Form.Label>
              <Form.Control
                type="number"
                placeholder="Prezzo"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formFile">
              <Form.Label>Immagine</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} required />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Aggiungi Prodotto
        </Button>
      </Form>
    </Container>
  );
};

ProductForm.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductForm;
