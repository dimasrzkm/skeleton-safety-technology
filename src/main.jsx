import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Downloads from "./pages/downloads/Downloads";
import Motovehicles from "./pages/motovehicles/Motovehicles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/motovehicles" element={<Motovehicles />} />
      <Route path="/downloads" element={<Downloads />} />
    </Routes>
  </BrowserRouter>
);
