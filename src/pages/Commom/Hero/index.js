import React from 'react';
import './styles.css'

export default function Hero(props) {
  return (
    <div className="hero-container">
      <div className="hero-illustation">
        <img src={props.heroImg} alt={props.alt} />
      </div>
      <div className="hero-context">
        <h2>{props.heroTitle}</h2>
        <p>{props.heroDescription}</p>
        <div className="hero-buttons">
          <button className="button">GET STARTED WITH GITHUB</button>
          <button className="button">GET STARTED</button>
        </div>
      </div>
    </div>
  );
}
