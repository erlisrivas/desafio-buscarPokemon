import './index.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbars from "./componentes/Navbars";

import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import Detalle from "./views/Detalle";


export default function App() {

  return (
 <div className="App">
  <BrowserRouter>
    <Navbars />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/pokemon/:name" element={<Detalle />} />
    </Routes>
  </BrowserRouter>
 </div>
 );
}
