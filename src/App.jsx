import { useState } from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomFooter from "./components/CustomFooter";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import Bacheca from "./components/Bacheca";
import PrezziLatte from "./components/ComponentsBacheca/PrezziLatte";
import PrezziOvini from "./components/ComponentsBacheca/PrezziOvini";
import PrezziSuini from "./components/ComponentsBacheca/PrezziSuini";
import PrezziBovini from "./components/ComponentsBacheca/PrezziBovini";
import PrezziAmericani from "./components/ComponentsBacheca/PrezziAmericani";
import FormIscrizione from "./components/FormIscrizione";
import FormLogin from "./components/FormLogin";
import ProfilePage from "./components/ProfilePage";
import Prodotti from "./components/Prodotti";
import Piantine from "./components/ComponentsProdotti.jsx/Piantine";
import Artigianali from "./components/ComponentsProdotti.jsx/Artigianali";
import Animali from "./components/ComponentsProdotti.jsx/Animali";
import Attrezzature from "./components/ComponentsProdotti.jsx/Attrezzature";
import ProductForm from "./components/ProductForm";
import Aziende from "./components/Aziende";
import Notifiche from "./components/Notifiche";
import PaymentForm from "./components/PaymentForm";
import CheckoutForm from "./components/CheckoutForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Chiave pubblicabile di Stripe
const stripePromise = loadStripe(
  "pk_live_51PGRC8EEPe7qppias0V6rJQNngJ6OE24ovrGOxmRt723kBKPH2NFvUYlOIvIEnkC0dSHBwbPz7FTiJBT5Cc8nBUW00mwlajsIq"
);

const App = () => (
  <>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <div className="d-flex flex-column h-100">
          <CustomNavbar />
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<Bacheca />} path="/mercati" />
              <Route element={<PrezziLatte />} path="/PrezziLatte" />
              <Route element={<PrezziOvini />} path="/PrezziOvini" />
              <Route element={<PrezziBovini />} path="/PrezziBovini" />
              <Route element={<PrezziSuini />} path="/PrezziSuini" />
              <Route element={<PrezziAmericani />} path="/PrezziAmericani" />
              <Route element={<FormIscrizione />} path="/FormIscrizione" />
              <Route element={<FormLogin />} path="/FormLogin" />
              <Route element={<ProfilePage />} path="/ProfilePage" />
              <Route element={<Prodotti />} path="/Prodotti" />
              <Route element={<Piantine />} path="/Piantine" />
              <Route element={<Artigianali />} path="/Artigianali" />
              <Route element={<Animali />} path="/Animali" />
              <Route element={<Attrezzature />} path="/Attrezzature" />
              <Route element={<ProductForm />} path="/nuovo-prodotto" />
              <Route element={<PaymentForm />} path="/payment" />
              <Route element={<CheckoutForm />} path="/checkout" />
              <Route element={<Aziende />} path="/Aziende" />
              <Route element={<Notifiche />} path="/Notifiche" />
              <Route element={<ResetPasswordForm />} path="/reset-password" />
              <Route element={<NotFound />} path="*" />
            </Routes>
          </div>
          <CustomFooter />
        </div>
      </Elements>
    </BrowserRouter>
  </>
);

export default App;
