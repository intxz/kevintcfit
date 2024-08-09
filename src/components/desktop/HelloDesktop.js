import React from "react"
import logo from "../../images/k (1).svg"
import mono1 from "../../images/mono.jpg"
import mono2 from "../../images/mono2.jpg"
import "./HelloDesktop.css"

function HelloDesktop() {
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
                    <img className="mono-image1" src={mono1} alt="Kevintcfit" />
                    <img className="mono-image2" src={mono2} alt="Kevintcfit" />
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