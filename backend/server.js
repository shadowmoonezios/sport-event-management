const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Datenbankverbindung
mongoose.connect('mongodb://localhost/sport-event-management', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

// Einfache Route
app.get('/', (req, res) => {
  res.send('API läuft...');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});