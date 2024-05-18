import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateItemQuantity,
  applyDiscountCode,
} from "../redux/actions/index";
import { Button, Form, Table } from "react-bootstrap";
import "../Carrello.css";

const Carrello = () => {
  const cartItems = useSelector((state) => state.carrello.items);
  const dispatch = useDispatch();
  const [discountCode, setDiscountCode] = React.useState("");

  const handleRemove = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleQuantityChange = (itemId, quantity) => {
    dispatch(updateItemQuantity(itemId, quantity));
  };

  const handleApplyDiscount = (e) => {
    e.preventDefault();
    dispatch(applyDiscountCode(discountCode));
    setDiscountCode("");
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="carrello-container">
      <h3>Carrello</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Prodotto</th>
            <th>Prezzo</th>
            <th>Quantità</th>
            <th>Totale</th>
            <th>Azione</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>€{item.price}</td>
              <td>
                <Form.Control
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  min="1"
                />
              </td>
              <td>€{(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button variant="danger" onClick={() => handleRemove(item.id)}>
                  Rimuovi
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="cart-summary">
        <Form onSubmit={handleApplyDiscount}>
          <Form.Group className="discount-form">
            <Form.Label>Codice Sconto</Form.Label>
            <Form.Control
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <Button type="submit">Applica</Button>
          </Form.Group>
        </Form>
        <div className="cart-total">
          <span>Totale:</span>
          <span>€{calculateTotal().toFixed(2)}</span>
        </div>
        <Button variant="success" className="checkout-button">
          Procedi al Checkout
        </Button>
      </div>
    </div>
  );
};

export default Carrello;
