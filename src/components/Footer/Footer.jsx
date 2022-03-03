import React from 'react';
import "./footer.scss";
import "../P-2/Page2"

export default function footer() {
  return (
    <div className="footer">
      <img src="" alt="" />
      <a href="#services">
        <h1>Nos Services</h1>
      </a>
      <h4>RETROUVEZ-NOUS SUR LES RESEAUX-SOCIAUX</h4>
      <div className="reseaux">
        <img src="assets/facebook.png" alt="" className="reseau" />
        <img src="assets/whatsapp.png" alt="" className="reseau" />
        <img src="assets/gmail.png" alt="" className="reseau" />
      </div>
      <h5>© 2022 - Garage Meca Auto - Site réalisé par Ruscuta David</h5>
    </div>
  )
}
