// components/Home.js
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Clinic Management System</h1>
      <h2>Your Health, Our Priority</h2>
      <p>Manage appointments, communicate with doctors, and keep your health on track.</p>
      <nav>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    </div>
  );
};

export default Home;
