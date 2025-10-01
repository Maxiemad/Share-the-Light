import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    currency: '',
    seva: '',
    amount: '',
    fullName: '',
    whatsappNumber: '',
    email: '',
    dateOfBirth: '',
    pincode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation form submitted:', formData);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Contact Us, Follow Us, and Form Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px', color: '#FFD700' }}>Contact Us</h3>
              <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-envelope" style={{ color: '#FFD700', width: '20px' }}></i>
                contact@sharethesmile.org
              </p>
              <p style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-phone" style={{ color: '#FFD700', width: '20px' }}></i>
                +91 98765 43210
              </p>
              
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px', color: '#FFD700' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 215, 0, 0.2)', borderRadius: '50%', color: '#FFD700', textDecoration: 'none', transition: 'all 0.3s ease' }}><i className="fab fa-facebook"></i></a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 215, 0, 0.2)', borderRadius: '50%', color: '#FFD700', textDecoration: 'none', transition: 'all 0.3s ease' }}><i className="fab fa-twitter"></i></a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255, 215, 0, 0.2)', borderRadius: '50%', color: '#FFD700', textDecoration: 'none', transition: 'all 0.3s ease' }}><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            {/* Form Fields moved here */}
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(5px)' }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', marginBottom: '15px', color: '#FFD700', textAlign: 'center' }}>Quick Contact</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#FFD700' }}>Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: 'white', color: '#333', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#FFD700' }}>WhatsApp Number</label>
                  <input 
                    type="tel" 
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    placeholder="Enter WhatsApp number"
                    style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: 'white', color: '#333', fontSize: '0.9rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#FFD700' }}>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: 'white', color: '#333', fontSize: '0.9rem' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Donation Card */}
          <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '30px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px', color: '#FFD700', textAlign: 'center' }}>Make a Donation</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#FFD700' }}>Currency</label>
                <select 
                  name="currency" 
                  value={formData.currency}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: 'white', color: '#333' }}
                  required
                >
                  <option value="">Select Currency</option>
                  <option value="indian">Indian Currency</option>
                  <option value="non-indian">Non-Indian Currency</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#FFD700' }}>Select Seva</label>
                <select 
                  name="seva" 
                  value={formData.seva}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: 'white', color: '#333' }}
                  required
                >
                  <option value="">Select Seva</option>
                  <option value="food">Food Distribution</option>
                  <option value="education">Education Support</option>
                  <option value="medical">Medical Aid</option>
                  <option value="general">General Donation</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#FFD700' }}>Amount?</label>
                <input 
                  type="number" 
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Enter amount"
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: 'white', color: '#333' }}
                  required
                />
              </div>


              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#FFD700' }}>Date of Birth (Optional)</label>
                <input 
                  type="date" 
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: 'white', color: '#333' }}
                />
                <small style={{ display: 'block', marginTop: '3px', fontSize: '0.8rem', color: '#FFD700', fontStyle: 'italic' }}>
                  Sankalp and Aarti will be performed for you on your birthday.
                </small>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#FFD700' }}>Pincode</label>
                <input 
                  type="text" 
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Enter pincode"
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: 'white', color: '#333' }}
                  required
                />
              </div>

              <button 
                type="submit" 
                style={{ 
                  background: 'linear-gradient(45deg, #FFD700, #FF8C00)', 
                  color: 'white', 
                  border: 'none', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Donate
              </button>
            </form>
          </div>

          {/* Payment Details */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px', color: '#FFD700' }}>Payment Details</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#FFD700' }}>For UPI & QR</h4>
              <div style={{ textAlign: 'center', padding: '15px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', marginBottom: '10px' }}>
                <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '8px', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-mobile-alt" style={{ fontSize: '2rem' }}></i>
                </div>
                <p style={{ margin: '0', fontSize: '0.9rem', color: '#FFD700' }}>xxxx.xxxx@xxxx</p>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#FFD700' }}>For Bank Transfer</h4>
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '15px', borderRadius: '10px', fontSize: '0.9rem' }}>
                <p style={{ margin: '5px 0' }}><strong>Account Name:</strong> xxxx xxxx xxxx xxxx</p>
                <p style={{ margin: '5px 0' }}><strong>Account Number:</strong> xxxxxxxxxxxxxxxx</p>
                <p style={{ margin: '5px 0' }}><strong>Bank Name:</strong> xxxx xxxx</p>
                <p style={{ margin: '5px 0' }}><strong>IFSC Code:</strong> xxxxxxxxxx</p>
              </div>
              
              <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '8px', fontSize: '0.8rem' }}>
                <p style={{ margin: '0', color: '#FFD700' }}><i className="fas fa-gift" style={{ marginRight: '5px' }}></i>(Kindly send us a screenshot for your seva entry)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="additional-info">
          <div className="info-grid">
            <div>
              <h4 style={{ color: '#FFD700', marginBottom: '10px' }}>Tax Benefits</h4>
              <p style={{ margin: '0', fontSize: '0.8rem' }}>*80G available as per Income Tax Act 1961 and rules made there under.</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem' }}>Tax Exemption Certificate Ref. No.: xxxxxxxxxxxxxxxx</p>
            </div>
            <div>
              <h4 style={{ color: '#FFD700', marginBottom: '10px' }}>Support</h4>
              <p style={{ margin: '0', fontSize: '0.8rem' }}>For more information please contact:</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem' }}>xxxxxxxxxxxx</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem' }}>xxxx@xxxx.xxx</p>
            </div>
          </div>
          <div style={{ marginTop: '15px', textAlign: 'center', fontSize: '0.8rem' }}>
            <p style={{ margin: '0' }}>*By proceeding, you are agreeing to our <a href="#" style={{ color: '#FFD700' }}>Terms & Conditions</a> & <a href="#" style={{ color: '#FFD700' }}>Privacy Policy</a></p>
          </div>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255, 215, 0, 0.3)', opacity: '0.8' }}>
          <p>Built by students to make a difference. © 2024 Share the Smile</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
