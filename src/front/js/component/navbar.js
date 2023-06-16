import React from "react";
import { Link } from "react-router-dom";
import GruasAlamo from "../../img/GruasAlamo .jpeg";
import Gruitalinea from "../../img/gruitalinea.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger sticky-top">
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
            <ul className="navbar-nav nav-text">
              <li className="nav-item">
                <a
                  className="nav-link active m-5 text-danger"
                  aria-current="page"
                  href="#"
                >
                  <span>Inicio</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-5 text-danger" href="#">
                  <span>Servicios</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-5 text-danger" href="#">
                  <span>Grúas</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active m-5 text-danger"
                  aria-current="page"
                  href="#"
                >
                  <span>Nosotros</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
