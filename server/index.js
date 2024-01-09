const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: 'https://dust-stokes.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer transporter (you should replace these values with your own)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ziatalhazia@gmail.com',
    pass: 'pzzz qatr xhgs aqxl',
  },
});

// Handle form submissions
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: 'ziatalhazia@gmail.com',
      to: 'ziatalhazia@gmail.com', // The email where you want to receive form submissions
      subject: 'New Contact Form Submission',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ success: false, message: error.toString() });
      }
      res.status(200).json({ success: true, message: 'Email sent successfully', info: info });
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
