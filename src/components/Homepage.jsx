// src/components/Homepage.jsx
import React from 'react';

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Our Hospital</h1>
        <p>Providing quality healthcare services with compassion and care.</p>
      </header>

      <section className="amenities">
        <h2>Our Amenities</h2>
        <ul>
          <li>24/7 Emergency Services</li>
          <li>State-of-the-Art Diagnostics</li>
          <li>Specialized OPD Clinics</li>
          <li>Modern Operation Theaters</li>
          <li>In-Patient and Out-Patient Services</li>
          <li>Pharmacy and Laboratory Services</li>
        </ul>
      </section>

      <section className="appointment">
        <h2>Book an OPD Appointment</h2>
        <div className="appointment-buttons">
          <button onClick={() => alert("Redirecting to New Patient Registration")}>
            New Patient
          </button>
          <button onClick={() => alert("Redirecting to Registered Patient Login")}>
            Registered Patient
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
