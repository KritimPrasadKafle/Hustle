import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Shared CSS for Login and Register

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Basic validation (for learning purposes)
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Login submitted:", { email, password });
    // Add API call or logic here later
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="auth-button primary">
          Login
        </button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};
