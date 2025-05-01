import React, { useState } from 'react';
import axios from 'axios';

function AddMember() {
  const [form, setForm] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aboutAim: ''
  });
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !image) {
      alert('Please fill at least the name and upload an image.');
      return;
    }
    const data = new FormData();
    Object.keys(form).forEach(key => data.append(key, form[key]));
    data.append('image', image);
    for (let [key, value] of data.entries()) {
      console.log(`FormData - ${key}: ${value}`); // Debug log
    }
    try {
      const response = await axios.post('http://localhost:5000/members', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Response from backend:', response.data); // Debug log
      alert('Member added successfully!');
      setForm({
        name: '',
        rollNumber: '',
        year: '',
        degree: '',
        aboutProject: '',
        hobbies: '',
        certificate: '',
        internship: '',
        aboutAim: ''
      });
      setImage(null);
    } catch (error) {
      console.error('Error adding member:', error.response ? error.response.data : error.message);
      alert('Failed to add member.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={form.rollNumber}
          onChange={e => setForm({ ...form, rollNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="Year"
          value={form.year}
          onChange={e => setForm({ ...form, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Degree"
          value={form.degree}
          onChange={e => setForm({ ...form, degree: e.target.value })}
        />
        <textarea
          placeholder="About Project"
          value={form.aboutProject}
          onChange={e => setForm({ ...form, aboutProject: e.target.value })}
        />
        <input
          type="text"
          placeholder="Hobbies (comma separated)"
          value={form.hobbies}
          onChange={e => setForm({ ...form, hobbies: e.target.value })}
        />
        <input
          type="text"
          placeholder="Certificate"
          value={form.certificate}
          onChange={e => setForm({ ...form, certificate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Internship"
          value={form.internship}
          onChange={e => setForm({ ...form, internship: e.target.value })}
        />
        <textarea
          placeholder="About Your Aim"
          value={form.aboutAim}
          onChange={e => setForm({ ...form, aboutAim: e.target.value })}
        />
        <input
          type="file"
          onChange={e => setImage(e.target.files[0])}
          accept="image/*"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMember;