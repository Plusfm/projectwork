const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes= require('./Route/contentRoute')



const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())
app.use(routes)

mongoose
  .connect('mongodb+srv://boypecky:qwerty12@cluster0.k72vi.mongodb.net/contact_db')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });