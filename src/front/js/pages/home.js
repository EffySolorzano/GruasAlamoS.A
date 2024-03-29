import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Segundo from "../../img/segundo.jpg";
import Towing from "../../img/Towing.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="img-fluid text-center mt-5 sticky-footer">
        <img src={Segundo} className="segundo fixed" alt="" />
      </div>
      <div>
        <img src={Towing} className="img-fluid towing" alt="towing" />
        <div className="home-title">
          <h1> Servicio de grúas y remolques a</h1>
        </div>
      </div>
      <div className="home">
        <h1>cualquier hora, en cualquier lugar.</h1>
        <br />
        <h2 className="text-danger alamo">Gruas Alamo de Venezuela</h2>
      </div>
    </>
  );
};
