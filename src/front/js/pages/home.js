import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Segundo from "../../img/segundo.jpg";
import Towing from "../../img/Towing.png";
import Towingg from "../../img/Towingg.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="text-center mt-5">
        <img src={Segundo} className="segundo" alt="" />
      </div>
      <div>
        <img src={Towing} className="towing" alt="towing" />
      </div>
    </>
  );
};
