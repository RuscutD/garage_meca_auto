import React from 'react';
import "./page4.scss";

export default function page4() {
  return (
    <div className="page4" id="contact">
      <div className="left4">
        <div className="leftContainer4">
          <h1>Nous Contacter</h1>
          <h3>Écrivez nous un message</h3>
          <form action="" className="form">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prénom" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Téléphone" />
            <textarea name="" id="" cols="132" rows="8" placeholder="Votre Message"></textarea>
          </form>
          <div className="contact">
            <div className="phone">
              <h3>Appelez-nous</h3>
              <div className="phoneContent">
                <img src="assets/icons8-téléphone-100.png" alt="" className="green-phone" />
                <h1>07 69 36 83 28</h1>
              </div>
            </div>
            <h1>OU</h1>
            <div className="mail">
              <h3>Envoyez-nous un email</h3>
              <div>
                <h2>mecarebais@gmail.com</h2>
              </div>
            </div>
          </div>
          <button className="send-btn">Envoyer</button>
        </div>
      </div>
      <div className="right4">
        <div className="rightContainer4">
          <div className="slider4">
            <h1>Nos Derniers Devis</h1>
            <div className="sliderContainer">
              <img src="assets/icons8-chevron-bas-96 (1).png" alt="" className="arrow-next" />
              <div className="slider">
                Slider Exemple
              </div>
              <img src="assets/icons8-chevron-bas-96 (1).png" alt="" className="arrow-back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
