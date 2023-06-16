import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Finalfinal from "../../img/finalfinal.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <img src={Finalfinal} className="headerlp" alt="headerlp" />
      <div className="boton">
        <button className="btn btn-danger m-5">Contacto</button>
      </div>
    </div>
  );
};
