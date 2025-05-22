const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Load initial values from data.json
let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
let { totalAmount, peopleCount } = data;

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve admin page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Get current status
app.get('/status', (req, res) => {
  res.json({ totalAmount, peopleCount });
});

// Password for admin update
const PASSWORD = '1234'; // Change this!

// Handle updates from admin form
app.post('/update', (req, res) => {
  const { password, amount, count } = req.body;

  if (password !== PASSWORD) {
    return res.send('❌ Wrong password');
  }

  totalAmount = parseInt(amount);
  peopleCount = parseInt(count);

  // Save updated values to data.json
  fs.writeFileSync('data.json', JSON.stringify({ totalAmount, peopleCount }));

  res.send('✅ Updated successfully. <a href="/admin">Back</a>');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
