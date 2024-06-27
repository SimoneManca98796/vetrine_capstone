import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import "../../CartDropdown.css";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carrello.items || []);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <div className="cart-dropdown">
      <h3>Il tuo Carrello</h3>
      {cartItems.length === 0 ? (
        <p>Il carrello è vuoto.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">€{item.price}</span>
                <span className="cart-item-quantity">
                  Quantità: {item.quantity}
                </span>
                <button
                  className="cart-item-remove"
                  onClick={() => handleRemove(item.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <span>Totale:</span>
        <span>€{total.toFixed(2)}</span>
      </div>
      {cartItems.length > 0 ? (
        <Link to="/payment" className="cart-checkout-button">
          Vai al pagamento!
        </Link>
      ) : (
        <button className="cart-checkout-button" disabled>
          Il carrello è vuoto!
        </button>
      )}
    </div>
  );
};

export default CartDropdown;
