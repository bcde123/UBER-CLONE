const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require('./db/db'); // <-- Uncommented line
const userRoutes = require('./routes/user.routes');

connectToDB();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error-handling middleware for malformed JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'Malformed JSON in request body' });
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes);
module.exports = app;