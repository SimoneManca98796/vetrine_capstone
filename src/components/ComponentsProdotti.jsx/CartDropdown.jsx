import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateItemQuantity,
  applyDiscountCode,
} from "../../redux/actions/index";
import { Button, Form } from "react-bootstrap";
import "../../CartDropdown.css";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.carrello.items);
  const dispatch = useDispatch();
  const [discountCode, setDiscountCode] = React.useState("");
  const [shippingMethod, setShippingMethod] = React.useState("standard");

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
    <div className="cart-dropdown active">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">€{item.price}</div>
              <div className="cart-item-quantity">
                <Form.Control
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  min="1"
                />
                <Button variant="danger" onClick={() => handleRemove(item.id)}>
                  Rimuovi
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">Totale: €{calculateTotal().toFixed(2)}</div>
      <Form onSubmit={handleApplyDiscount}>
        <Form.Group>
          <Form.Label>Codice Sconto</Form.Label>
          <Form.Control
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <Button type="submit">Applica</Button>
        </Form.Group>
      </Form>
      <div className="cart-buttons">
        <Button variant="primary" href="/checkout">
          Procedi al Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
