// src/components/Homepage.jsx
import React, { useState } from 'react';
import '../App.css'; // Correct path for App.css
import ambulance from '../Images/ambulance.jpg';
import emergency from '../Images/Emergency.jpg';
import modernTools from '../Images/Moderntools.jpg';
import medicines from '../Images/Medicines.jpg';
import labs from '../Images/Labs.jpg';
import anytimeServices from '../Images/Anytimeservices.jpg';

const services = [
  { title: 'Anytime Services', img: anytimeServices, info: 'We offer round-the-clock healthcare services.' },
  { title: 'Modern Tools', img: modernTools, info: 'We use state-of-the-art equipment for diagnostics and treatment.' },
  { title: 'Labs', img: labs, info: 'Advanced laboratory services for accurate and quick results.' },
  { title: 'Pharmacy', img: medicines, info: 'Get your prescriptions filled anytime at our pharmacy.' },
  { title: 'Ambulance', img: ambulance, info: '24/7 ambulance services for emergency transportation.' },
  { title: 'Emergency Care', img: emergency, info: 'Our emergency department is always open for critical care.' }
];

const Homepage = () => {
  const [current, setCurrent] = useState(0);
  const length = services.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Our Hospital</h1>
        <p>Providing quality healthcare services with compassion and care.</p>
      </header>

      <section className="slider-container">
        <button className="left-arrow" onClick={prevSlide}>❮</button>
        <button className="right-arrow" onClick={nextSlide}>❯</button>
        {services.map((service, index) => (
          <div key={index} className={index === current ? 'slide active' : 'slide'}>
            {index === current && (
              <div className="service-item">
                <img src={service.img} alt={service.title} className="service-img" />
                <div className="service-info-container">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-info">{service.info}</p>
                </div>
              </div>
            )}
          </div>
        ))}
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
