import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItemFromCart } from "../redux/actions/index";
import { Button, Table, Alert } from "react-bootstrap";
import { FaTrash, FaShoppingCart, FaEuroSign } from "react-icons/fa";
import "../Carrello.css";

const Carrello = () => {
  const cartItems = useSelector((state) => state.carrello.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.price * item.quantity + (item.shippingCost || 0);
      return total + itemTotal;
    }, 0);
  };

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="carrello-container">
      <h3>
        <FaShoppingCart /> Il tuo Carrello
      </h3>
      {cartItems.length === 0 ? (
        <Alert variant="info">Carrello vuoto</Alert>
      ) : (
        <>
          <Table hover responsive>
            <thead>
              <tr>
                <th>Prodotto</th>
                <th>Prezzo</th>
                <th>Spese di spedizione</th>
                <th>Totale</th>
                <th>Azione</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>€{item.price.toFixed(2)}</td>
                  <td>€{(item.shippingCost || 0).toFixed(2)}</td>
                  <td>
                    €
                    {(
                      item.price * item.quantity +
                      (item.shippingCost || 0)
                    ).toFixed(2)}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      <FaTrash /> Rimuovi
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="cart-summary">
            <div className="cart-total">
              <span>Totale:</span>
              <span>
                <FaEuroSign /> {calculateTotal().toFixed(2)}
              </span>
            </div>
            <Button
              variant="success"
              className="checkout-button"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Vai al pagamento!
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrello;
