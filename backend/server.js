require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // From .env
    pass: process.env.EMAIL_PASS, // App-specific password
  },
});

// Contact route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Or another recipient
    subject: 'New Contact Form Submission',
    text: `You got a message from:
    
    Name: ${name}
    Email: ${email}
    Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
      return res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Message sent successfully!' });
    }
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
