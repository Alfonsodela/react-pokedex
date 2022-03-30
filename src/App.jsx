import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Navigator from "./components/Navigator/Navigator";
import Pokedex from "./pages/Pokedex/Pokedex";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;
