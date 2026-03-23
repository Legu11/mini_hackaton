require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connecter la DB
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('aaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAH');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});