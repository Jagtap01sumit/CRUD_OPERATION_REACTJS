// navbar by using bootstrap
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleNavbar = () => {
    setIsopen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Sales-App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Add Sales
            </Link>
            <a className="nav-link" href="/top5sales">
              Top 5 Sales
            </a>
            <a className="nav-link" href="/totalrevenue">
              Today's Total Revenue
            </a>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <a className="nav-link" href="/">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
