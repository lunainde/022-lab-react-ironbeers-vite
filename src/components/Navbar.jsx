// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <Link to="/" className="home-icon">
        <i className="fas fa-home"></i>
      </Link>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Menu Items */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/beers" onClick={toggleMenu}>
          All Beers
        </Link>
        <Link to="/random-beer" onClick={toggleMenu}>
          Random Beer
        </Link>
        <Link to="/new-beer" onClick={toggleMenu}>
          New Beer
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
