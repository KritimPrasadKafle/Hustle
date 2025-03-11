import React, { JSX } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import { AdminDashboard } from "./AdminDashboard";
import { Navbar } from "./Navbar";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const role = localStorage.getItem("role");
  return role === "ADMIN" ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0, width: "100%" }}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/dashboard"
            element={<h1>User Dashboard (WIP)</h1>}
          />
          <Route
            path="/"
            element={
              <h1>Welcome! Please use the navbar to login or register.</h1>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
