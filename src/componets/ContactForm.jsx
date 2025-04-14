import React, { useState } from 'react';
import './Contact.css'; // Ensure your CSS file is included

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponseMessage('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Error sending message');
    }
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-row">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
