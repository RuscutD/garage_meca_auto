import React from 'react';
import "./navBar.scss";
import "../P-3/Page3";
import "../P-4/Page4";
import "../P-1/Page1";

export default function NavBar() {
  return (
    <div className="navBar" id="navBar">
      <div className="left">
        <a href="#home">
          <h5 id="Meca">Meca Auto</h5>
        </a>
      </div>
      <div className="middle">
        <h3>Nos Services</h3>
      </div>
      <div className="right">
        <a href="#contact">
          <div className="contact">
            <img src="assets/icons8-téléphone-90.png" alt="" />
            <h5 id="Contact">Contact</h5>
          </div>
        </a>
        <a href="#adress">
          <div className="adresse">
            <img src="assets/icons8-visite-96.png" alt="" />
            <h5 id="Adresse">Adresse</h5>
          </div>
        </a>
      </div>
    </div>
  )
}
