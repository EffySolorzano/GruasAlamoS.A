import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Segundo from "../../img/segundo.jpg";
import Placeholder from "../../img/placeholder.jpg";

const Servicios = () => {
  return (
    <>
      <div
        className="img-fluid text-center mt-5"
        style={{ marginBottom: "-315px" }}
      >
        <img src={Segundo} className="segundo" alt="" />
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Placeholder} className="img-fluid servicios" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Placeholder} className="img-fluid servicios" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Placeholder} className="img-fluid servicios" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className=" carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className=" visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Servicios;
