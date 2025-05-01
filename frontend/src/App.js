import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddMember from './components/AddMember';
import Members from './components/Members';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>TEAM BEIZE</h1>
          <p>Welcome to the Beize Learn Management</p>
          <nav>
            <Link to="/add" className="nav-button">Add Member</Link>
            <Link to="/members" className="nav-button">View Members</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/add" element={<AddMember />} />
            <Route path="/members" element={<Members />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<div></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;