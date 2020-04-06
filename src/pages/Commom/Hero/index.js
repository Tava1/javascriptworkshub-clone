import React from 'react';
import Button from '../Button'
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
          <Button
            secondary
            large
            context="GET STARTED WITH GITHUB"
          />
          <Button
            primary
            large
            context="GET STARTED"
          />
        </div>
      </div>
    </div>
  );
}
