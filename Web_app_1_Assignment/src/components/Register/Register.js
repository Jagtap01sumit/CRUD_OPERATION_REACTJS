// Register.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Register() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!firstname || !lastname || !email || !password) {
      setError("All fields are required");
      return;
    }

    const formData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };
    console.log(formData);
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration successful");

        setfirstname("");
        setlastname("");
        setEmail("");
        setPassword("");
        setError("");
      } else {
        // Handle errors, e.g., display an error message
        const data = await response.json();
        console.log(data);
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="register template d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="form_container p-5 rounded bg-white">
          <form onSubmit={handleSubmit}>
            <h3>Registration Form</h3>
            {error && <p className="text-danger">{error}</p>}
            <div className="mb-2">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="form-control"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="form-control"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </div>
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
              <Link to="/Login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
