import React from "react";
import { Link } from "react-router-dom";
import GruasAlamo from "../../img/GruasAlamo .jpeg";
import Gruitalinea from "../../img/gruitalinea.png";
import Foto from "../../img/foto.png";
import Expectativas from "../../img/expectativas.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger sticky-top">
        <div className="container-fluid">
          <div>
            <img src={Foto} className="fotofoto" alt="fotofoto" />
          </div>
          <a className="navbar-brand">
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contacto"
                >
                  <i className="fa-regular fa-envelope text-white"></i>
                </Link>
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
                <Link className="nav-link active m-5 text-danger" to="/">
                  <span>Inicio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link m-5 text-danger" to="/servicios">
                  <span>Servicios</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link m-5 text-danger" to="/gruas">
                  <span>Grúas</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link m-5 text-danger" to="/nosotros">
                  <span>Nosotros</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="weatherwidget-io"
                  href="https://forecast7.com/en/10d48n66d90/caracas/"
                  data-label_1="Caracas"
                  data-label_2=""
                  data-font="Roboto"
                  data-icons="Climacons Animated"
                  data-mode="Current"
                  data-theme="blue-mountains"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
