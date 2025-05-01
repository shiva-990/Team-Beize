const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log('Request body:', req.body);
    console.log('Request file:', req.file);
    const { name, rollNumber, year, degree, aboutProject, hobbies, certificate, internship, aboutAim } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }
    const member = new Member({
      name,
      rollNumber: rollNumber || '',
      year: year || '',
      degree: degree || '',
      aboutProject: aboutProject || '',
      hobbies: hobbies || '',
      certificate: certificate || '',
      internship: internship || '',
      aboutAim: aboutAim || '',
      image: req.file.filename
    });
    await member.save();
    console.log('Member saved successfully:', member);
    res.json(member);
  } catch (error) {
    console.error('Error adding member:', error);
    res.status(500).json({ error: 'Failed to add member' });
  }
});

router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    console.log('Fetched members:', members);
    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    console.log('Fetched member by ID:', member);
    res.json(member);
  } catch (error) {
    console.error('Error fetching member:', error);
    res.status(500).json({ error: 'Failed to fetch member' });
  }
});

module.exports = router;