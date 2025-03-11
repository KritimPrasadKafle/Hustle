import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Login } from "./Login";
import { Register } from "./Register";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0, width: "100%" }}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <div style={{ padding: "2rem", textAlign: "center" }}>
                <h1>Welcome to My Website</h1>
                <p>Use the navbar to navigate to Login or Register.</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
