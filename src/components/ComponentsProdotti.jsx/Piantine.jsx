import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsByCategory,
  addItemToCart,
} from "../../redux/actions/index";
import { Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assicurati di importare Link
import ProductForm from "../ProductForm";
import { FaShoppingCart } from "react-icons/fa";
import CartDropdown from "./CartDropdown";
import "../../Piantine.css";

const Piantine = () => {
  const dispatch = useDispatch();
  const piantine = useSelector((state) => state.products.piantine);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsByCategory("piantine"));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="main-content container">
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
    </div>
  );
};

export default Piantine;
