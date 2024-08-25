import React, { useEffect, useState } from "react";
import logo from "../../images/k (1).svg";
import mono1 from "../../images/mono.jpg";
import mono2 from "../../images/mono2.jpg";
import quebin from "../../images/quebin.jpeg";
import quebin2 from "../../images/quebin2.jpeg";
import "./HelloMobile.css";

const images = [mono1, quebin, mono2, quebin2];

function HelloMobile() {
  const [currentImageIndex, setCCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobile-container">
      <nav className="nav-mobile">
        <div className="mobile-name">
          <h1>KEVINTCFIT</h1>
        </div>
        <div className="mobile-menu">
          <ul>
            <li>Kevintcfit</li>
            <li>Kevintcfit</li>
            <li>Kevintcfit</li>
          </ul>
        </div>
      </nav>
      <div className="mobile-photo-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Image"
            className={`mono-image-mobile ${index === currentImageIndex ? "visible" : "hidden"}`}
          />
        ))}
      </div>
      <div>
        <img className="logo-mobile" src={logo} alt="Kevintcfit" />
      </div>
    </div>
  );
}

export default HelloMobile;
