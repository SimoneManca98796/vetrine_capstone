import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsByCategory,
  addItemToCart,
  searchProducts,
} from "../../redux/actions/index";
import { Card, Button, Alert, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assicurati di importare Link
import ProductForm from "../ProductForm";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import CartDropdown from "./CartDropdown";
import SearchBar from "../SearchBar"; // Assicurati di importare SearchBar
import "../../Piantine.css";

const Piantine = () => {
  const dispatch = useDispatch();
  const piantine = useSelector((state) => state.products.piantine);
  const [cartOpen, setCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsByCategory("piantine"));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleSearch = (searchTerm) => {
    dispatch(searchProducts(searchTerm));
  };

  return (
    <div className="main-content container">
      <SearchBar onSearch={handleSearch} />
      <h1 className="mb-3">Piantine e Ortaggi</h1>
      <Alert variant="info">
        Nota: Il carrello si trova nella pagina{" "}
        <Link to="/Prodotti">Prodotti</Link>.
      </Alert>
      <ProductForm category="piantine" />
      <div className="row">
        {Array.isArray(piantine) && piantine.length > 0 ? (
          piantine.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                    <br />
                    Prezzo: €{product.price}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="button"
                    onClick={() => handleAddToCart(product)}
                  >
                    Aggiungi al Carrello
                  </Button>
                  <FaInfoCircle
                    className="info-icon"
                    onClick={() => handleShowModal(product)}
                  />
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>Nessun prodotto trovato.</p>
        )}
      </div>
      <FaShoppingCart className="cart-icon" onClick={toggleCart} />
      {cartOpen && <CartDropdown />}

      {/* Modal for product details */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="img-fluid"
            />
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Prezzo:</strong> €{selectedProduct.price}
            </p>
            <p>
              <strong>Venduto da:</strong> {selectedProduct.vendor}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Piantine;
