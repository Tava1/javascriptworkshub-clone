import React from 'react';
import { Link } from "react-router-dom";
import './styles.css'

import logoImg from '../../assets/logo.png'

export default function Navigation() {
  return (
    <header>
      <div className="navigation">
        <img src={logoImg} alt="JavaScript Works" />
        <span><strong>JAVASCRIPT</strong>WORKS</span>

        <nav className="navigation-bar">
          <ul>
            <li>
              <Link className="link-item" to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link className="link-item" >Resources</Link>
            </li>
            <li>
              <Link className="link-item" to="/employers">For Employers</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navigation-start">
        <span>
          <Link className="link-item" to="/login">
            Login
          </Link>
        </span>
        <button className="button">GET STARTED</button>
      </div>
    </header>
  );
}