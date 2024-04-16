import React, { useState } from 'react';
import '../App.css';

function Modal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle form submission
    console.log('Name:', name);
    console.log('Mobile Number:', countryCode + mobileNumber);
    // Reset form fields after submission
    setName('');
    setMobileNumber('');
    setCountryCode('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Consultation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="countryCode">Country Code:</label>
            <select id="countryCode" value={countryCode} onChange={handleCountryCodeChange} required>
              <option value="">Select Country Code</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              {/* Add more options for other countries */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              pattern="[0-9]{10}"
              required
            />
            <small>Format: 10 digits only</small>
          </div>
          <button type="submit">Submit</button>
          <button className="close-btn" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

