import { useState } from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomFooter from "./components/CustomFooter";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import Bacheca from "./components/Bacheca";
import PrezziLatte from "./components/ComponentsBacheca/PrezziLatte";
import FormIscrizione from "./components/FormIscrizione";
import FormLogin from "./components/FormLogin";
import Prodotti from "./components/Prodotti";

const App = () => (
  <>
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <CustomNavbar />
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Bacheca />} path="/mercati" />
            <Route element={<PrezziLatte />} path="/PrezziLatte" />
            <Route element={<FormIscrizione />} path="/FormIscrizione" />
            <Route element={<FormLogin />} path="/FormLogin" />
            <Route element={<Prodotti />} path="/Prodotti" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </div>
        <CustomFooter />
      </div>
    </BrowserRouter>
  </>
);

export default App;
