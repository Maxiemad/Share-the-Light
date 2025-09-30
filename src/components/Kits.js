import React, { useState, useEffect } from 'react';
import './Kits.css';

const Kits = () => {
  const [selectedKit, setSelectedKit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalKit, setModalKit] = useState(null);
  const [donorDetails, setDonorDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressLine: '',
    city: '',
    state: '',
    pincode: '',
    contactPreference: 'whatsapp',
    message: '',
    consent: false
  });
  const kits = [
    {
      name: "Basic Kit",
      price: "₹100",
      items: [
        { icon: "🍭", text: "Sweets" },
        { icon: "🪔", text: "Diyas" },
        { icon: "🍫", text: "Chocolates" }
      ],
      popular: false
    },
    {
      name: "Joy Kit",
      price: "₹500",
      items: [
        { icon: "🍭", text: "Sweets" },
        { icon: "🪔", text: "Diyas" },
        { icon: "🍫", text: "Chocolates" },
        { icon: "🧸", text: "Toys" }
      ],
      popular: false
    },
    {
      name: "Celebration Kit",
      price: "₹1499",
      items: [
        { icon: "🍭", text: "Sweets" },
        { icon: "🪔", text: "Diyas" },
        { icon: "🍫", text: "Chocolates" },
        { icon: "🧸", text: "Toys" },
        { icon: "📚", text: "Books" },
        { icon: "🏮", text: "Lanterns" },
        { icon: "🎁", text: "Extra Goodies" }
      ],
      popular: false
    }
  ];

  // UX: prevent background scroll when modal open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen]);

  // UX: close on Escape key
  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isModalOpen]);

  return (
    <section id="kits" className="kits-section" style={{ padding: '100px 0', background: '#fff', margin: '0 80px', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <h2 className="section-title">
          Choose Your Diwali Kit
        </h2>
        
        <div className="kits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {kits.map((kit, index) => (
            <div 
              key={kit.name}
              style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '20px', 
                textAlign: 'center', 
                boxShadow: selectedKit === kit.name ? '0 15px 40px rgba(255, 140, 0, 0.3)' : '0 10px 30px rgba(0,0,0,0.1)',
                border: selectedKit === kit.name ? '2px solid #FF8C00' : '2px solid transparent',
                position: 'relative',
                transform: selectedKit === kit.name ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setSelectedKit(kit.name)}
              onMouseLeave={() => setSelectedKit(null)}
            >
              
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎁</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', marginBottom: '10px', color: '#800000' }}>
                {kit.name}
              </h3>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#FF8C00', margin: '20px 0' }}>
                {kit.price}
              </div>
              
              <ul style={{ listStyle: 'none', marginBottom: '30px', padding: 0 }}>
                {kit.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ 
                    padding: '10px 0', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '10px',
                    color: '#555'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className="btn-primary"
                style={{
                  background: 'linear-gradient(45deg, #FFD700, #FF8C00)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(255, 140, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
                onClick={() => { setIsModalOpen(true); setModalKit(kit); }}
              >
                Donate This Kit
              </button>
            </div>
          ))}
        </div>
      </div>
    
    {isModalOpen && (
      <div className="modal-overlay" onClick={(e) => { if (e.target.classList.contains('modal-overlay')) setIsModalOpen(false); }}>
        <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="donate-modal-title">
          <div className="modal-header">
            <h3 id="donate-modal-title">Donate: {modalKit?.name}</h3>
            <button className="modal-close" aria-label="Close" onClick={() => setIsModalOpen(false)}>×</button>
          </div>
          <div className="modal-body">
            <p className="modal-subtitle">Please share your basic details to proceed.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Donation intent', { kit: modalKit, donorDetails });
                setIsModalOpen(false);
              }}
            >
              <div className="form-section">
                <div className="form-heading">Donation</div>
                <div className="form-row">
                  <label>Amount</label>
                  <input type="text" value={modalKit?.price || ''} readOnly />
                </div>
              </div>

              <div className="form-section">
                <div className="form-heading">Your details</div>
                <div className="form-row">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={donorDetails.fullName}
                    onChange={(e) => setDonorDetails({ ...donorDetails, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Email</label>
                  <input
                    type="email"
                    value={donorDetails.email}
                    onChange={(e) => setDonorDetails({ ...donorDetails, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={donorDetails.phone}
                    onChange={(e) => setDonorDetails({ ...donorDetails, phone: e.target.value })}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div className="form-section">
                <div className="form-heading">Address</div>
                <div className="form-row">
                  <label>Address</label>
                  <input
                    type="text"
                    value={donorDetails.addressLine}
                    onChange={(e) => setDonorDetails({ ...donorDetails, addressLine: e.target.value })}
                    placeholder="House/Street/Area"
                  />
                </div>
                <div className="form-grid-2">
                  <div className="form-row">
                    <label>City</label>
                    <input
                      type="text"
                      value={donorDetails.city}
                      onChange={(e) => setDonorDetails({ ...donorDetails, city: e.target.value })}
                      placeholder="City"
                    />
                  </div>
                  <div className="form-row">
                    <label>State</label>
                    <input
                      type="text"
                      value={donorDetails.state}
                      onChange={(e) => setDonorDetails({ ...donorDetails, state: e.target.value })}
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label>Pincode</label>
                  <input
                    type="text"
                    value={donorDetails.pincode}
                    onChange={(e) => setDonorDetails({ ...donorDetails, pincode: e.target.value })}
                    placeholder="Pincode"
                    pattern="\d{5,6}"
                  />
                </div>
              </div>

              <div className="form-section">
                <div className="form-heading">Contact</div>
                <div className="form-row">
                  <label>Preferred contact</label>
                  <select
                    value={donorDetails.contactPreference}
                    onChange={(e) => setDonorDetails({ ...donorDetails, contactPreference: e.target.value })}
                  >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="call">Call</option>
                    <option value="email">Email</option>
                  </select>
                </div>
                <div className="form-row">
                  <label>Message (optional)</label>
                  <textarea
                    rows="3"
                    value={donorDetails.message}
                    onChange={(e) => setDonorDetails({ ...donorDetails, message: e.target.value })}
                    placeholder="Any note for us"
                  />
                </div>
                <div className="form-row" style={{ flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                  <input
                    id="consent"
                    type="checkbox"
                    checked={donorDetails.consent}
                    onChange={(e) => setDonorDetails({ ...donorDetails, consent: e.target.checked })}
                    required
                  />
                  <label htmlFor="consent">I agree to be contacted about my donation</label>
                </div>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-secondary-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="modal-submit">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )}
    </section>
  );
};

export default Kits;
