import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../redux/actions";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "../PaymentForm.css";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [captchaToken, setCaptchaToken] = useState(null);

  const cartItems = useSelector((state) => state.carrello.items);
  const clientSecret = useSelector((state) => state.payment.clientSecret);

  useEffect(() => {
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => {
        const itemTotal = item.price * item.quantity + (item.shippingCost || 0);
        return total + itemTotal;
      }, 0);
    };

    const amount = calculateTotal() * 100; // convert to cents
    if (amount > 0) {
      dispatch(createPaymentIntent(null, amount));
    }
  }, [cartItems, dispatch]);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleCaptchaVerify = (token) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    try {
      const captchaResponse = await axios.post(
        "http://localhost:8080/api/verify-captcha",
        { token: captchaToken }
      );

      if (captchaResponse.data.success) {
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });

        if (payload.error) {
          setError(`Payment failed ${payload.error.message}`);
          setProcessing(false);
        } else {
          setError(null);
          setProcessing(false);
          setSucceeded(true);
        }
      } else {
        setError("Captcha verification failed");
        setProcessing(false);
      }
    } catch (error) {
      setError(`Captcha verification failed: ${error.message}`);
      setProcessing(false);
    }
  };

  return (
    <div className="payment-form-container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="card-element" onChange={handleChange} />
        <HCaptcha
          sitekey="5228c81c-30a2-494c-8a0e-061054386a82"
          onVerify={handleCaptchaVerify}
          onExpire={handleCaptchaExpire}
        />
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {succeeded && <p className="result-message">Payment succeeded!</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
