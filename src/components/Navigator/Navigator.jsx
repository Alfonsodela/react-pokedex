import React from "react";
import "../Navigator/Navigator.scss";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <nav className="navigator">
      <div className="navigator__brand">
        <p className="navigator__title">Pokemon</p>
      </div>
      <div className="navigator_nav">
        <Link to="/" className="navigator__link">
          Home
        </Link>
        <Link to="/pokedex-list" className="navigator__link">
          Pokedex List
        </Link>
        <Link to="/pokedex" className="navigator__link">
          Pokedex
        </Link>
        <Link to="/contact" className="navigator__link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;
