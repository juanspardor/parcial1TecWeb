import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PaginaLogin from './components/PaginaLogin';
import PaginaDatos from "./components/PaginaDatos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<PaginaLogin />} />
         <Route path="/cafes" element={<PaginaDatos />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
