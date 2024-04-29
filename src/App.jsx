import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomFooter from "./components/CustomFooter";
//import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column h-100">
          <CustomNavbar />
          <Routes>{/* <Route element={<NotFound />} path="*" /> */}</Routes>
        </div>
        <CustomFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
