const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes= require('./Route/contactRoute')

const server = express();
const port = 4000;


const allowedOrigins = ['http://localhost:4000', 'http://localhost:5173'];

server.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200,
  })
); 

server.use(express.json());
server.use(routes)

mongoose
  .connect('mongodb+srv://boypecky:qwerty12@cluster0.k72vi.mongodb.net/contact_db')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
