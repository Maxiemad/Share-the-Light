import React, { useState, useEffect } from 'react';
import './Kits.css';

const Kits = () => {
  const [selectedKit, setSelectedKit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStage, setModalStage] = useState('form'); 
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
  const upiId = 'ydvvipul2005@okicici';
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
    <section id="kits" className="kits-section">
      <div className="container">
        <h2 className="section-title">Choose Your Diwali Kit</h2>
        
        <div className="kits-grid">
          {kits.map((kit, index) => (
            <div
              key={kit.name}
              className={`kit-card ${selectedKit === kit.name ? 'is-selected' : ''}`}
              onMouseEnter={() => setSelectedKit(kit.name)}
              onMouseLeave={() => setSelectedKit(null)}
            >
              <div className="kit-icon">🎁</div>
              <h3 className="kit-title">{kit.name}</h3>
              <div className="kit-price">{kit.price}</div>
              <div className="kit-features-title">What's inside</div>
              <ul className="kit-items" role="list">
                {kit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="kit-item">
                    <span className="kit-item-icon" aria-hidden="true">{item.icon}</span>
                    <span className="kit-item-text">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="kit-spacer" />
              <button
                className="kit-cta"
                onClick={() => { setIsModalOpen(true); setModalKit(kit); setModalStage('form'); }}
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
            {modalStage === 'form' && (
              <>
                <p className="modal-subtitle">Please share your basic details to proceed.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setModalStage('payment');
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
              </>
            )}

            {modalStage === 'payment' && (
              <div className="payment-step">
                <div className="form-heading">Complete your donation</div>
                <p className="modal-subtitle">Scan the QR or use these bank details to transfer.</p>
                <div className="payment-grid">
                  <div className="qr-box">
                    <img src="/QR.jpg" alt="QR Code for payment" className="qr-image" />
                    <div className="qr-caption">UPI QR (any app)</div>
                  </div>
                  <div className="bank-box">
                    <div className="bank-row"><span>Account Name</span><strong>Share the Smile</strong></div>
                    <div className="bank-row"><span>Account No.</span><strong>123456789012</strong></div>
                    <div className="bank-row"><span>IFSC</span><strong>HDFC0000XXX</strong></div>
                    <div className="bank-row"><span>Bank</span><strong>HDFC Bank, Mumbai</strong></div>
                    <div className="bank-note">After payment, please reply to our confirmation message or email with a screenshot.</div>
                  </div>
                </div>
                <div className="upi-row">
                  <div className="upi-label">UPI ID</div>
                  <div className="upi-content">
                    <code className="upi-id">{upiId}</code>
                    <button
                      type="button"
                      className="copy-btn"
                      onClick={(e) => {
                        navigator.clipboard.writeText(upiId);
                        const btn = e.currentTarget;
                        const original = btn.textContent;
                        btn.textContent = 'Copied!';
                        btn.disabled = true;
                        setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 1200);
                      }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="modal-actions">
                  <button type="button" className="btn-secondary-outline" onClick={() => setModalStage('form')}>Back</button>
                  <button type="button" className="modal-submit" onClick={() => setIsModalOpen(false)}>Done</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
    </section>
  );
};

export default Kits;
