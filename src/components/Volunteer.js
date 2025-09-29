import React from 'react';
import AnimatedDiya from './AnimatedDiya';
import './Volunteer.css';

const Volunteer = () => {
  return (
    <section id="volunteer" className="volunteer-section">
      <div className="container">
        <h2 className="section-title">Join the Movement</h2>
        <div className="volunteer-content">
          <div className="volunteer-text">
            <h3>Be Part of Something Beautiful</h3>
            <p>Join our community of volunteers who are making a difference in children's lives this Diwali.</p>
            <button className="btn-primary">Become a Volunteer</button>
          </div>
          <div className="volunteer-animation">
            <AnimatedDiya />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
