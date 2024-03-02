// login.js
import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ObjContext } from "../../context/objContext";

function Login() {
  const { getTop5Sales } = useContext(ObjContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send
    const formData = {
      email: email,
      password: password,
    };

    try {
      // Send data to the backend using Fetch API
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect or update state
        console.log("Login successful");
      } else {
        // Handle errors, e.g., display an error message
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="form_container p-5 rounded bg-white">
          <form onSubmit={handleSubmit}>
            <h3>Login Form</h3>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              <Link to="/Register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
