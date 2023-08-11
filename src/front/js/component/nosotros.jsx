import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Segundo from "../../img/segundo.jpg";

const Nosotros = () => {
  return (
    <>
      <div
        className="img-fluid text-center mt-5"
        style={{ marginBottom: "-600px" }}
      >
        <img src={Segundo} className="segundo" alt="" />
      </div>
    </>
  );
};

export default Nosotros;
