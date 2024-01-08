// mailer.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ziatalhazia@gmail.com', // Your Gmail email address
    pass: 'zxlq lstj cvrf wimg', // Your Gmail email password
  },
});

module.exports = transporter;
