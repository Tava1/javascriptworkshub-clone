import React from 'react';
import './styles.css'
import Navigation from '../Commom/Navigation';
import Hero from '../Commom/Hero';
import Billboard from '../Commom/Billboard'
import Frame from '../Commom/Frame';

import heroImage from '../assets/hero-home.svg'

import benefit1 from '../assets/benefit1.svg'
import benefit2 from '../assets/benefit2.svg'
import benefit3 from '../assets/benefit3.svg'
import benefit4 from '../assets/benefit4.svg'

import different1 from '../assets/different1.svg'
import different2 from '../assets/different2.svg'



export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero
        heroImg={heroImage}
        alt={"Science of JavaScript"}
        heroTitle={"Discover the best JavaScript opportunities"}
        heroDescription={"We match your skills to great jobs using languages you love."}
      />
      <Billboard
        description={"Join engineers from:"}
      />

      <div className="benefits-container">
        <div className="benefits-context">
          <p>
            COLLABORATE AND IMPROVE YOUR SKILLSET
          </p>
          <h3>Open source issues</h3>
        </div>


        <div className="benefits-content">
          <Frame
            image={benefit1}
            description={"Learn new languages and add new skills to your resume"}
          />
          <Frame
            image={benefit2}
            description={"Get paid to contribute to projects you find interesting"}
          />
          <Frame
            image={benefit3}
            description={"Learn about a company’s stack and culture before even applying"}
          />
          <Frame
            image={benefit4}
            description={"Get Fast-tracked for full time jobs at companies you’ve already worked for"}
          />
        </div>
      </div>



      <div className="benefits-container">
        <div className="benefits-context">
          <p>
            AND FINALLY…
          </p>
          <h3>How we’re different</h3>
        </div>


        <div className="benefits-content">
          <Frame
            image={different1}
            title={"We know our stuff"}
            description={"Unlike other companies, we know the difference between Java and Javascript and won’t ask for 6 years experience in a language that came out last year."}
          />
          <Frame
            image={different2}
            title={"We don’t waste your time"}
            description={"Our specialist platform unique algorithm means that we only send you jobs you’re actually a match for. You’ll only get emails for jobs you can actually get."}
          />
          <Frame
            image={benefit1}
            title={"We’re the future of tech work"}
            description={"With our Open Source issues, you can get paid, learn new languages and get noticed by employers. We’re leveraging the power of open source to help you further your career."}
          />

        </div>
      </div>



    </div>
  );
}