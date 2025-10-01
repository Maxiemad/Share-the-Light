import React from 'react';
import './DonorSlider.css';

const DonorSlider = ({ donors }) => {
  return (
    <div className="donor-slider-container">
      <h3 style={{ textAlign: 'center', color: '#FFD700', marginBottom: '20px' }}>
        Recent Donors
      </h3>
      <div className="donor-slider">
        {donors.map((donor, index) => (
          <div key={donor.id || index} className="donor-card">
            <div className="donor-avatar">
              {donor.fullName ? donor.fullName.charAt(0).toUpperCase() : 'D'}
            </div>
            <div className="donor-info">
              <h4>{donor.fullName || 'Anonymous'}</h4>
              <p>₹{donor.amount || '0'}</p>
              <small>{donor.kit || 'Custom'}</small>
            </div>
          </div>
        ))}
        
        {/* Duplicate for infinite scroll effect */}
        {donors.map((donor, index) => (
          <div key={`duplicate-${donor.id || index}`} className="donor-card">
            <div className="donor-avatar">
              {donor.fullName ? donor.fullName.charAt(0).toUpperCase() : 'D'}
            </div>
            <div className="donor-info">
              <h4>{donor.fullName || 'Anonymous'}</h4>
              <p>₹{donor.amount || '0'}</p>
              <small>{donor.kit || 'Custom'}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorSlider;
