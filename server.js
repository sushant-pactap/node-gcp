const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");



dotenv.config();
const app = express();;


const PORT = process.env.PORT || 8080;

//connect db
connectDB();

console.log(process.env?.TEST_SUSHANTA)
console.log(process.env?.TEST1)
console.log(process.env?.TEST2)
console.log(process.env?.TEST3)
// MIDDLEWARE
app.use(express.json());


const allowedOrigins = process.env.CORS_ORIGIN?.split(",") || [];

app.use(cors({
  origin: allowedOrigins
}));

// ROUTES
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Backend Running Successfully 🚀');
});

app.get('/cloud-trigger', (req, res) => {
  res.send('Cloud Trigger Running Successfully 🚀');
});

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'API Working'
  });
});
app.get('/api/health', (req, res) => {
  res.json({
    status:200,
    success: true,
    message: 'Api working perfectly'
  });
});


app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "Internal server error"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});