import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../images/k (1).svg";
import mono1 from "../../images/mono.jpg";
import mono2 from "../../images/mono2.jpg";
import quebin from "../../images/quebin.jpeg";
import quebin2 from "../../images/quebin2.jpeg";
import quebin3 from "../../images/quebin3.jpeg";
import AccessForm from "./AccessForm";
import "./HelloDesktop.css";

const images = [mono1, mono2, quebin, quebin2, quebin3];

function HelloDesktop() {
  const [currentImageIndex, setCCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="desktop-container">
      <nav className="nav-desktop">
        <a href="/">
          <img className="logo-desktop" src={logo} alt="Kevintcfit" />
        </a>
        <div className="desktop-name">
          <h1></h1>
        </div>
        <div className="desktop-menu">
          <ul>
            <li>Transformaciones</li>
            <li className="acces-form">
              <a href="#asesorias">Asesorías</a>
            </li>
            <li>Contacto</li>
          </ul>
        </div>
      </nav>
      <div className="desktop-body">
        <div className="left-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Image"
              className={`mono-image ${index === currentImageIndex ? "visible" : "hidden"}`}
            />
          ))}
          <div className="desktop-filter"></div>
        </div>
        <div className="right-container">
          <h1>EL ÉXITO PERSONALIZADO</h1>
          <p>
            Este enfoque integral ha sido cuidadosamente diseñado para ajustarse
            a tus necesidades individuales, tu estilo de vida y tus objetivos
            específicos. Nuestro propósito es asegurarnos de que alcancemos
            resultados de la manera más eficiente y sostenible posible,
            adaptándonos a ti en cada paso del camino.{" "}
            <strong>¡Estamos aquí para lograrlo juntos!</strong>
          </p>
        </div>
        <img className="logo-desktop-body" src={logo} alt="Kevintcfit" />
      </div>
      <AccessForm></AccessForm>
    </div>
  );
}

export default HelloDesktop;
