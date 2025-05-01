import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/members');
        setMembers(res.data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="member-list">
      <h2>Team Members</h2>
      {members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        members.map(member => (
          <div className="member-card" key={member._id}>
            <p><strong>Name:</strong> {member.name}</p>
            <p><strong>Roll Number:</strong> {member.rollNumber}</p>
            {member.image && <img src={`http://localhost:5000/uploads/${member.image}`} alt="Profile" />}
            <Link to={`/details/${member._id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Members;