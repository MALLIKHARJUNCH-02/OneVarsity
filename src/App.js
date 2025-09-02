import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Signup from "./Signup";
import "./styles.css";

export default function App() {
  // wrap app with user context to share user info
  return (
    <UserProvider>
      {/* router for page navigation */}
      <Router>
        <Routes>
          {/* login page at root */}
          <Route path="/" element={<Login />} />
          {/* signup page */}
          <Route path="/signup" element={<Signup />} />
          {/* user dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* user profile page */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
