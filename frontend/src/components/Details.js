import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Details() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/members/${id}`);
        console.log('Fetched member data:', res.data); // Debug log
        setMember(res.data);
      } catch (error) {
        console.error('Error fetching member:', error.response ? error.response.data : error.message);
      }
    };
    fetchMember();
  }, [id]);

  if (!member) return <div>Loading...</div>;

  return (
    <div className="details-card">
      <h2>Member Details</h2>
      <p><strong>Name:</strong> {member.name || 'N/A'}</p>
      <p><strong>Roll Number:</strong> {member.rollNumber || 'N/A'}</p>
      <p><strong>Year:</strong> {member.year || 'N/A'}</p>
      <p><strong>Degree:</strong> {member.degree || 'N/A'}</p>
      <p><strong>About Project:</strong> {member.aboutProject || 'N/A'}</p>
      <p><strong>Hobbies:</strong> {member.hobbies || 'N/A'}</p>
      <p><strong>Certificate:</strong> {member.certificate || 'N/A'}</p>
      <p><strong>Internship:</strong> {member.internship || 'N/A'}</p>
      <p><strong>About Aim:</strong> {member.aboutAim || 'N/A'}</p>
      {member.image && <img src={`http://localhost:5000/uploads/${member.image}`} alt="Profile" style={{ float: 'right', width: '100px', borderRadius: '50%', marginLeft: '15px' }} />}
    </div>
  );
}

export default Details;