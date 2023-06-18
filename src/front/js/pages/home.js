import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Finalfinal from "../../img/finalfinal.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <img src={Finalfinal} className="headerlp" alt="headerlp" />
      <div className="boton">
        <Link to="/contacto">
          <button className="btn btn-danger m-5 homebtn">Contacto</button>
        </Link>
      </div>
    </div>
  );
};
