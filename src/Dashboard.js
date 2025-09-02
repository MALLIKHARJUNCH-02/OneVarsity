import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
  // hold number of users
  const [userCount, setUserCount] = useState(0);

  // fetch users count once when component mounts
  useEffect(() => {
    fetch("https://json-server-assignment1-backend.onrender.com/users")
      .then(res => res.json())
      .then(data => {
        setUserCount(data.length); // update user count state
      })
      .catch(err => console.error("Failed to fetch users:", err));
  }, []);

  // render dashboard with sidebar, header, and a card showing user count
  return (
    <div className="dashboard-layout">
      {/* sidebar nav */}
      <nav className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/profile">User Profile</Link>
          </li>
        </ul>
      </nav>

      {/* main content area */}
      <div className="main-content">
        {/* top navbar */}
        <header className="navbar">
          <h2>Dashboard</h2>
        </header>

        {/* cards container */}
        <div className="cards">
          {/* user count card */}
          <div className="card">
            <h3>Total Users</h3>
            <p>{userCount}</p>
          </div>
          {/* more cards can be added here */}
        </div>
      </div>
    </div>
  );
}
