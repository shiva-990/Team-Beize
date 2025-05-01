const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const membersRouter = require('./routes/members');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/members', membersRouter);
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost/beize', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.listen(5000, () => console.log('Server running on port 5000'));