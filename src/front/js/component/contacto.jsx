import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userActions } from "../store/usuario.js";
import Gruacontacto from "../../img/gruacontacto.png";
import Segundo from "../../img/segundo.jpg";

const Contacto = () => {
  const actions = userActions((actions) => actions.userActions);
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !phone || !message) {
      Swal.fire({
        icon: "error",
        title: "Uuups...",
        text: "Por favor completa todos los campos.",
      });
      return;
    }

    try {
      const response = await actions.sendEmail(fullname, email, phone, message);

      console.log(response);

      Swal.fire({
        icon: "success",
        title: "Email enviado exitosamente",
      }).then(() => {
        navigate("/"); // Redirect to the landing page after success msg
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <>
      <div className="img-fluid text-center mt-5">
        <img src={Segundo} className="img-fluid segundo" alt="segundo" />

        <div className="contact-container p-3 d-flex flex-column justify-content-center bg-light rounded-3 border border-secondary-emphasis">
          <center>
            <img
              src={Gruacontacto}
              className="img-fluid mt-2 justify-content-center towline"
            />
          </center>
          <form className="form-horizontal" method="post" id="contact_form">
            <fieldset>
              <div className="form-group">
                <label className="col-md-12 control-label pt-2 pb-2">
                  Nombre:
                </label>
                <div className="col-md-12 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user"></i>
                    </span>
                    <input
                      name="fullname"
                      placeholder="nombre completo"
                      className="form-control p-2"
                      type="text"
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-12 control-label pt-2 pb-2">
                  Email:
                </label>
                <div className="col-md-12 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope"></i>
                    </span>
                    <input
                      name="email"
                      placeholder="email"
                      className="form-control p-2"
                      type="text"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-12 control-label pt-2 pb-2">
                  Teléfono:
                </label>
                <div className="col-md-12 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-earphone"></i>
                    </span>
                    <input
                      name="phone"
                      placeholder="teléfono"
                      className="form-control p-2"
                      type="text"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-12 control-label pt-2 pb-2">
                  Mensaje:
                </label>
                <div className="col-md-12 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-pencil"></i>
                    </span>
                    <textarea
                      className="form-control p-2"
                      name="Message"
                      placeholder="escribe tu mensaje aquí"
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12 control-label"></label>
                <div className="col-md-12 d-flex justify-content-center mb-2">
                  <button
                    type="submit"
                    className="btn btn-danger ms-3"
                    onClick={handleSendEmail}
                  >
                    Send
                  </button>
                  <Link to="/">
                    <button type="button" className="btn btn-secondary ms-3">
                      Go back
                    </button>
                  </Link>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
