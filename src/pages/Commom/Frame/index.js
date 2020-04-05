import React from 'react';
import './styles.css'

export default function Frame(props) {
  return (
    <div className="frame-container">
      <div className="frame-box">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="frame-context">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}