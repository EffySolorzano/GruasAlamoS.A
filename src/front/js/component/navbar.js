import React from "react";
import { Link } from "react-router-dom";
import GruasAlamo from "../../img/GruasAlamo .jpeg";
import Gruitalinea from "../../img/gruitalinea.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Gruitalinea} className="gruita" alt="grualinea" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav icons">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa-regular fa-envelope text-white"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/p/Servicios-de-Gr%C3%BAas-Alamo-de-Vzla-100065217424238/"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook text-white"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/gruasalamovzla/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container-fluid">
          <Link to="/">
            <img src={GruasAlamo} className="img-fluid logo" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
