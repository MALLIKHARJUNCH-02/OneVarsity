import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
      return;
    }
    if (user && user.email) {
      fetch(`https://json-server-assignment1-backend.onrender.com/users?email=${encodeURIComponent(user.email)}`)
        .then(res => res.json())
        .then(data => {
          if (data.length === 1) {
            setUser(data[0]);
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
