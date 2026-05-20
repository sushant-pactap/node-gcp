const express = require('express');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Backend Running Successfully 🚀');
});

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'API Working'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});