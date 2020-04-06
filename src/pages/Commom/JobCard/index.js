import React from 'react';
import { FaMapMarkerAlt, FaHome, FaMedal } from 'react-icons/fa';
import Button from '../Button'
import './styles.css'

export default function JobCard() {
  return (
    <div className="card-container">
      <div className="card-image">
        <div className="circle"></div>
      </div>
      <div className="card-context">
        <div className="card-job-description">
          <h2>Software Engineer</h2>
          <h4>Competitive</h4>
        </div>

        <div className="card-job-company">
          <div className="card-job-company-name">
            <FaHome />
            <span>Audius</span>
          </div>
          <div className="card-job-company-location">
            <FaMapMarkerAlt />
            <span>San Francisco, CA, US</span>
          </div>
        </div>

        <div className="card-job-description">
          <p>Put power back into the hands of audio content creators</p>
        </div>
      </div>

      {/* Optional */}
      <div className="card-job-sponsored">
        <FaMedal />
        <span>Sponsorship</span>
      </div>

      <div className="card-job-labels">
        <ul>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>NODE.JS</li>
          <li>REACT.NATIVE</li>
        </ul>
      </div>
      <div className="card-actions">
        <Button
          outline
          context="MORE INFO"
        />
        <Button
          primary
          context="APPLY"
        />
      </div>
    </div>
  );
}