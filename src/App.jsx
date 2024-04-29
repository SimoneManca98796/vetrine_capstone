import { useState } from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomFooter from "./components/CustomFooter";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";

const App = () => (
  <>
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <CustomNavbar />
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </div>
        <CustomFooter />
      </div>
    </BrowserRouter>
  </>
);

export default App;
