import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, orderBy, limit, query } from 'firebase/firestore';
import { db } from '../firebase';
import { sendDonationNotification } from '../services/emailService';
import { sendSimpleDonationNotification } from '../services/simpleEmailService';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    currency: '',
    kit: '',
    amount: '',
    fullName: '',
    whatsappNumber: '',
    email: '',
    pincode: ''
  });
  const [showQRModal, setShowQRModal] = useState(false);
  const [recentDonors, setRecentDonors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Show QR modal immediately
    setShowQRModal(true);
    return; // Skip Firebase for now to test modal
    
    try {
      // Save donor data to Firebase
      const donorData = {
        fullName: formData.fullName,
        whatsapp: formData.whatsappNumber,
        email: formData.email,
        currency: formData.currency,
        kit: formData.kit,
        amount: formData.kit === 'custom' ? formData.amount : formData.kit,
        pincode: formData.pincode,
        date: new Date()
      };

      await addDoc(collection(db, 'donors'), donorData);
      
      // Show QR modal immediately
      setShowQRModal(true);
      
      // Send email notification
      try {
        // Try EmailJS first
        const emailResult = await sendDonationNotification(donorData);
        if (!emailResult.success) {
          // Fallback to simple email service
          await sendSimpleDonationNotification(donorData);
        }
        console.log('Email notification sent successfully');
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Try fallback method
        try {
          await sendSimpleDonationNotification(donorData);
          console.log('Fallback email notification sent');
        } catch (fallbackError) {
          console.error('All email methods failed:', fallbackError);
        }
        // Don't block the donation process if email fails
      }
      
      // Update recent donors list
      await fetchRecentDonors();
      
      // Reset form
      setFormData({
        currency: '',
        kit: '',
        amount: '',
        fullName: '',
        whatsappNumber: '',
        email: '',
        pincode: ''
      });
      
    } catch (error) {
      console.error('Error saving donor:', error);
      alert('Error saving donation. Please try again.');
    }
  };

  const handleCloseQRModal = () => {
    setShowQRModal(false);
  };

  const fetchRecentDonors = async () => {
    try {
      const q = query(collection(db, 'donors'), orderBy('date', 'desc'), limit(10));
      const querySnapshot = await getDocs(q);
      const donors = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // If no real donors, show sample data
      if (donors.length === 0) {
        const sampleDonors = [
          { id: '1', fullName: 'Vikram Patel', amount: '999', kit: 'Joy Kit' },
          { id: '2', fullName: 'Kavita Joshi', amount: '999', kit: 'Joy Kit' },
          { id: '3', fullName: 'Sneha Agarwal', amount: '799', kit: 'Custom' },
          { id: '4', fullName: 'Arjun Singh', amount: '1299', kit: 'Celebration Kit' },
          { id: '5', fullName: 'Amit Gupta', amount: '499', kit: 'Basic Kit' },
          { id: '6', fullName: 'Rohit Mehta', amount: '1499', kit: 'Celebration Kit' },
          { id: '7', fullName: 'Priya Sharma', amount: '999', kit: 'Joy Kit' },
          { id: '8', fullName: 'Rajesh Kumar', amount: '599', kit: 'Custom' },
          { id: '9', fullName: 'Sunita Verma', amount: '1199', kit: 'Joy Kit' },
          { id: '10', fullName: 'Deepak Jain', amount: '899', kit: 'Custom' },
          { id: '11', fullName: 'Neha Reddy', amount: '699', kit: 'Basic Kit' },
          { id: '12', fullName: 'Vikash Tiwari', amount: '1099', kit: 'Joy Kit' },
          { id: '13', fullName: 'Anjali Desai', amount: '799', kit: 'Custom' },
          { id: '14', fullName: 'Suresh Yadav', amount: '1299', kit: 'Celebration Kit' },
          { id: '15', fullName: 'Meera Iyer', amount: '999', kit: 'Joy Kit' },
          { id: '16', fullName: 'Kiran Shah', amount: '599', kit: 'Basic Kit' },
          { id: '17', fullName: 'Ravi Nair', amount: '1399', kit: 'Celebration Kit' },
          { id: '18', fullName: 'Pooja Agarwal', amount: '899', kit: 'Custom' },
          { id: '19', fullName: 'Manoj Singh', amount: '999', kit: 'Joy Kit' },
          { id: '20', fullName: 'Shruti Gupta', amount: '699', kit: 'Basic Kit' }
        ];
        setRecentDonors(sampleDonors);
      } else {
        setRecentDonors(donors);
      }
    } catch (error) {
      console.error('Error fetching donors:', error);
      // Show sample data on error too
      const sampleDonors = [
        { id: '1', fullName: 'Vikram Patel', amount: '999', kit: 'Joy Kit' },
        { id: '2', fullName: 'Kavita Joshi', amount: '999', kit: 'Joy Kit' },
        { id: '3', fullName: 'Sneha Agarwal', amount: '799', kit: 'Custom' },
        { id: '4', fullName: 'Arjun Singh', amount: '1299', kit: 'Celebration Kit' },
        { id: '5', fullName: 'Amit Gupta', amount: '499', kit: 'Basic Kit' },
        { id: '6', fullName: 'Rohit Mehta', amount: '1499', kit: 'Celebration Kit' },
        { id: '7', fullName: 'Priya Sharma', amount: '999', kit: 'Joy Kit' },
        { id: '8', fullName: 'Rajesh Kumar', amount: '599', kit: 'Custom' },
        { id: '9', fullName: 'Sunita Verma', amount: '1199', kit: 'Joy Kit' },
        { id: '10', fullName: 'Deepak Jain', amount: '899', kit: 'Custom' },
        { id: '11', fullName: 'Neha Reddy', amount: '699', kit: 'Basic Kit' },
        { id: '12', fullName: 'Vikash Tiwari', amount: '1099', kit: 'Joy Kit' },
        { id: '13', fullName: 'Anjali Desai', amount: '799', kit: 'Custom' },
        { id: '14', fullName: 'Suresh Yadav', amount: '1299', kit: 'Celebration Kit' },
        { id: '15', fullName: 'Meera Iyer', amount: '999', kit: 'Joy Kit' },
        { id: '16', fullName: 'Kiran Shah', amount: '599', kit: 'Basic Kit' },
        { id: '17', fullName: 'Ravi Nair', amount: '1399', kit: 'Celebration Kit' },
        { id: '18', fullName: 'Pooja Agarwal', amount: '899', kit: 'Custom' },
        { id: '19', fullName: 'Manoj Singh', amount: '999', kit: 'Joy Kit' },
        { id: '20', fullName: 'Shruti Gupta', amount: '699', kit: 'Basic Kit' }
      ];
      setRecentDonors(sampleDonors);
    }
  };

  // Removed auto-focus scroll handler to prevent unwanted scrolling

  // Load recent donors on component mount
  useEffect(() => {
    fetchRecentDonors();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation form submitted:', formData);
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Contact Us, Follow Us, and Form Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '20px', color: '#FFD700' }}>Contact Us</h3>
              <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-envelope" style={{ color: '#FFD700', width: '20px' }}></i>
                ayush.shukla@adypu.edu.in
              </p>
              <p style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-phone" style={{ color: '#FFD700', width: '20px' }}></i>
                +91 83608 19091
              </p>
              
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
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#FFD700' }}>WhatsApp Number (Optional)</label>
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
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#FFD700' }}>Email (Optional)</label>
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
            
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#FFD700' }}>Select Kit</label>
                <select 
                  name="kit" 
                  value={formData.kit}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: 'white', color: '#333' }}
                  required
                >
                  <option value="">Select Kit</option>
                  <option value="100">₹100 Kit</option>
                  <option value="500">₹500 Kit</option>
                  <option value="1500">₹1500 Kit</option>
                  <option value="custom">Custom Amount</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: '#FFD700' }}>
                  {formData.kit === 'custom' ? 'Custom Amount' : 'Amount'}
                </label>
                <input 
                  type="number" 
                  name="amount"
                  value={formData.kit === 'custom' ? formData.amount : formData.kit}
                  onChange={handleInputChange}
                  placeholder={formData.kit === 'custom' ? 'Enter custom amount' : 'Amount will be set based on kit selection'}
                  style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', background: formData.kit === 'custom' ? 'white' : '#f5f5f5', color: '#333' }}
                  required={formData.kit === 'custom'}
                  readOnly={formData.kit !== 'custom'}
                />
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
              <div style={{ textAlign: 'center', padding: '30px', background: 'rgba(255, 140, 0, 0.2)', borderRadius: '15px', marginBottom: '10px' }}>
                <div style={{ width: '300px', height: '300px', background: 'white', borderRadius: '12px', margin: '0 auto 25px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '25px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                  <img src="/qr.jpeg" alt="QR Code for payment" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <p style={{ margin: '0', fontSize: '1.2rem', color: '#FFD700', fontWeight: '500' }}>ydvvipul2005@okicici</p>
              </div>
            </div>

          </div>
        </div>


        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255, 215, 0, 0.3)', opacity: '0.8' }}>
          <p>Built by students to make a difference. © 2024 Share the Smile</p>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999999
        }}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            textAlign: 'center',
            maxWidth: '500px',
            width: '90%'
          }}>
            <h2 style={{ color: '#800000', marginBottom: '20px' }}>
              Gift Smiles
            </h2>
            
            <div style={{
              width: '300px',
              height: '300px',
              background: 'white',
              border: '2px solid #FFD700',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/qr.jpeg" 
                alt="QR Code" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <p style={{ color: '#800000', marginBottom: '20px' }}>
              UPI ID: ydvvipul2005@okicici
            </p>
            
            <button
              onClick={handleCloseQRModal}
              style={{
                background: '#FFD700',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

