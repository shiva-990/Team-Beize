const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, default: '' },
  year: { type: String, default: '' },
  degree: { type: String, default: '' },
  aboutProject: { type: String, default: '' },
  hobbies: { type: String, default: '' },
  certificate: { type: String, default: '' },
  internship: { type: String, default: '' },
  aboutAim: { type: String, default: '' },
  image: { type: String, required: true }
});
module.exports = mongoose.model('Member', memberSchema);