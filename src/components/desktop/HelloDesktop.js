import React, { useEffect, useState } from "react"
import logo from "../../images/k (1).svg"
import mono1 from "../../images/mono.jpg"
import mono2 from "../../images/mono2.jpg"
import quebin from "../../images/quebin.jpeg"
import quebin2 from "../../images/quebin2.jpeg"
import "./HelloDesktop.css"

const images = [mono1, quebin, mono2, quebin2];

function HelloDesktop() {

    const [currentImageIndex, setCCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setCCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="desktop-container">
            <nav className="nav-desktop">
                <img className="logo-desktop" src={logo} alt="Kevintcfit" />
                <div className="desktop-name">
                    <h1>KEVINTCFIT</h1>
                </div>
                <div className="desktop-menu">
                    <ul>
                        <li>Kevintcfit</li>
                        <li>Kevintcfit</li>
                        <li>Kevintcfit</li>
                    </ul>
                </div>
            </nav>
            <div className="desktop-body">
                <div className="left-container">
                    {images.map((image, index) =>(
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
                    <h1>QUEBIN</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                </div>
                <img className="logo-desktop-body" src={logo} alt="Kevintcfit" />
            </div>
        </div>
    )
}

export default HelloDesktop;