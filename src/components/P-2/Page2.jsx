import React from 'react';
import "./page2.scss";
import Slider from "./Slider/Slider";

export default function page2() {
  return (
    <div className="page2" id="services">
      <div className="top2">
        <div className="left2">
          <div className="leftContainer2">
            <h3>QUI SOMMES NOUS ?</h3>
            <p>Situe a Rebais 77510 Garage Meca Auto est Specialiste pour la reparation et l’entretien des voitures et utilitaires toutes marques. Fort de son experience da,s la mecanique automobile, le Meca Auto vous propose des services d’entretien, mais egalement le diagnostic de vos pannes mecaniques et electriques. Passionne de mecanique, le gerant du garage et son equipe vous conseillent et vous orientent quant a la reparation de vos vehicules.</p>
          </div>
        </div>
        <div className="right2">
          <div className="rightContainer2">
            <img src="assets/avatacar-logo-white.png" alt="" className="avatacarImg" />
          </div>
            <h2>GARAGE MECA AUTO</h2>
        </div>
      </div>
      <div className="bottom2">
        <h1>Nos Services</h1>
        <div className="sliderContainer2">
          <img src="assets/icons8-chevron-bas-96 (1).png" alt="" className="arrow-next" />
          <div className="slider2">
            SLIDER
          </div>
          <img src="assets/icons8-chevron-bas-96 (1).png" alt="" className="arrow-back" />
        </div>
      </div>
    </div>
  )
}
