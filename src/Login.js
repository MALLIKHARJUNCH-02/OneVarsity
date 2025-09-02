import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

// simple email check function
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Login() {
  const { setUser } = useContext(UserContext);

  // hold email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // hold error message for form
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // handle login form submit
  function handleSubmit(e) {
    e.preventDefault();

    // check if inputs are empty
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    // check email format
    if (!validateEmail(email)) {
      setError("Invalid email.");
      return;
    }

    // fetch user from json server matching email and password
    fetch(`https://json-server-assignment1-backend.onrender.com/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
      .then(res => res.json())
      .then(users => {
        if (users.length === 1) {
          // set user context and redirect
          const user = users[0];
          setUser({ name: user.name, email: user.email });
          navigate("/dashboard");
        } else {
          setError("Invalid email or password.");
        }
      })
      .catch(() => setError("Network error. Please try again."));
  }

  return (
    <div className="centered">
      <h2>Login</h2>

      {/* login form */}
      <form onSubmit={handleSubmit} className="auth-form">
        {/* email input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />

        {/* password input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />

        {/* show error if exists */}
        {error && <p className="error">{error}</p>}

        {/* submit button */}
        <button type="submit">Login</button>

        <p>
          Don't have an account? <a href="/signup">Sign up here.</a>
        </p>
      </form>
    </div>
  );
}
