import React from 'react';
import "./page3.scss";

export default function page3() {
  return (
    <div className="page3" id="adress">
      <div className="top3">
        <div className="left3">
          <div className="leftContainer3">
            <div className="horaires">
              <div className="jour">
                <h2>Lundi</h2>
                <h5>8H00 - 18H00</h5>
              </div>
              <div className="jour">
                <h2>Mardi</h2>
                <h5>8H00 - 18H00</h5>
              </div>
              <div className="jour">
                <h2>Mercredi</h2>
                <h5>8H00 - 18H00</h5>
              </div>
              <div className="jour">
                <h2>Jeudi</h2>
                <h5>8H00 - 18H00</h5>
              </div>
              <div className="jour">
                <h2>Vendredi</h2>
                <h5>8H00 - 18H00</h5>
              </div>
              <div className="jour">
                <h2>Samedi</h2>
                <h5>8H00 - 12H00</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="right3">
          <div className="rightContainer3">
            <div className="head">
              <h1>Notre Adresse</h1>
              <img src="assets/icons8-visite-96 (1).png" alt="" className="green-adress" />
            </div>
            <div className="maps">
              maps
            </div>
            <h4>19 Av. Jean de la Fontaine, 77510 Rebais</h4>
          </div>
        </div>
      </div>
      <div className="bottom3">
        <div className="slider3">
          Commentaires
        </div>
      </div>
    </div>
  )
}
