import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if no user info, send back to login page
    if (!user) {
      navigate("/", { replace: true });
      return;
    }

    // if user email exists, get full user info from server
    if (user && user.email) {
      fetch(`https://json-server-assignment1-backend.onrender.com?email=${encodeURIComponent(user.email)}`)
        .then(res => res.json())
        .then(data => {
          if (data.length === 1) {
            setUser(data[0]);  // update user context with full info
          }
        });
    }
  }, [user, setUser, navigate]);

  // show loading while fetching user info
  if (!user) return <p>Loading user info...</p>;

  // show user profile data
  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
