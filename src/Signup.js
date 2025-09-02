import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

// simple email check
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Signup() {
  // setUser updates logged-in user in context
  const { setUser } = useContext(UserContext);

  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error message
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // handle signup form submit
  function handleSubmit(e) {
    e.preventDefault();

    // basic validation - all fields required
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // check if email is valid
    if (!validateEmail(email)) {
      setError("Invalid email.");
      return;
    }

    // check if user exists
    fetch(`https://json-server-assignment1-backend.onrender.com/users?email=${encodeURIComponent(email)}`)
      .then(res => res.json())
      .then(existingUsers => {
        if (existingUsers.length > 0) {
          setError("User with this email already exists.");
          return;
        }

        // add new user to server
        fetch("https://json-server-assignment1-backend.onrender.com/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        })
          .then(res => res.json())
          .then(newUser => {
            // update user context and go to login
            setUser({ name: newUser.name, email: newUser.email });
            navigate("/");
          });
      })
      .catch(() => setError("Network error, please try again."));
  }

  return (
    <div className="centered">
      <h2>Signup</h2>

      {/* signup form */}
      <form onSubmit={handleSubmit} className="auth-form">
        {/* name input */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => { setName(e.target.value); setError(""); }}
        />
        {/* email input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => { setEmail(e.target.value); setError(""); }}
        />
        {/* password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(""); }}
        />

        {/* show error */}
        {error && <p className="error">{error}</p>}

        {/* submit button */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
