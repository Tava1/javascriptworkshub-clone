import React from 'react';
import './styles.css'

import troopsImg from './assets/troops.svg'
import facebookImg from './assets/facebook.svg'
import sigmaImg from './assets/two-sigma.svg'
import airbnbImg from './assets/airbnb.svg'
import spotifyImg from './assets/spotify.svg'

export default function Billboard(props) {
  return (
    <div className="billboard-container">
      <ul>
        <li>{props.description}</li>

        <li>
          <img src={troopsImg} alt="Troops" />
        </li>

        <li>
          <img src={facebookImg} alt="Facebook" />
        </li>

        <li>
          <img src={sigmaImg} alt="Two Sigma" />
        </li>

        <li>
          <img src={airbnbImg} alt="Airbnb" />
        </li>

        <li>
          <img src={spotifyImg} alt="Spotify" />
        </li>
      </ul>
    </div>
  );
}