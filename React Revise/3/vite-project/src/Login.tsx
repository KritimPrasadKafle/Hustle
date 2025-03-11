import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

interface LoginResponse {
  success: boolean;
  message: string;
  responseObject: {
    id: number;
    name: string;
    username: string;
    email: string;
    photo: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    role: "ADMIN" | "USER";
    token: string;
    refreshToken: string;
    created_at: string;
    updated_at: string;
  };
  statusCode: number;
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:3000/api/v1/users/auth",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        const { token, role, name, photo } = response.data.responseObject;
        // Store data in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem(
          "userData",
          JSON.stringify({ name, photo, email })
        );

        console.log("Login successful:", response.data);

        // Navigate based on role
        if (role === "ADMIN") {
          navigate("/admin/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials or server error");
    }
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
        Don’t have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};
