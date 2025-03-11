import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

interface RegisterResponse {
  success: boolean;
  message: string;
  responseObject: {
    users: {
      // Adjusted for nested 'users'
      id: number;
      name: string;
      email: string;
      photo: string;
      gender: "MALE" | "FEMALE" | "OTHER";
      role: "USER" | "ADMIN"; // Allow both roles
      created_at: string;
      updated_at: string;
    };
  };
  statusCode: number;
}

export const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [gender, setGender] = useState<"MALE" | "FEMALE" | "OTHER">("MALE");
  const [photo, setPhoto] = useState<File | null>(null);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !username || !password || !confirmPassword) {
      alert("Please fill in all required fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("gender", gender);
    if (photo) formData.append("photo", photo);
    formData.append("password", password);
    formData.append("confirm_password", confirmPassword);

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await axios.post<RegisterResponse>(
        "http://localhost:3000/api/v1/users/register",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        const user = response.data.responseObject.users;
        // Store minimal data since token is missing
        localStorage.setItem("role", user.role);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            name: user.name,
            email: user.email,
            username, // Not returned, using form input
            photo: user.photo,
          })
        );

        console.log("Registration successful:", response.data);

        // Navigate based on role (should be USER, but handle ADMIN too)
        if (user.role === "ADMIN") {
          navigate("/admin/dashboard"); // Unexpected but possible
        } else {
          navigate("/user/dashboard");
        }
      } else {
        alert(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert(
        "Registration failed: " +
          ((error as any).response?.data?.message || "Server error")
      );
    }
  };

  // Form JSX remains the same (omitted for brevity)
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
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
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) =>
              setGender(e.target.value as "MALE" | "FEMALE" | "OTHER")
            }
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="auth-button primary">
          Register
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};
