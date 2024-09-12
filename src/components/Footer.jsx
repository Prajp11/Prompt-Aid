import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css'; // Assuming you're using App.css for styles

const Footer = () => {
  return (
    <footer className="footer">
      {/* Extreme Left: Address and Appointment Desk */}
      <div className="footer-left">
        <h4><FaMapMarkerAlt /> Address:</h4>
        <p>Pune - 411001, Maharashtra, India</p>
        <h4>Appointment Desk is Operational From:</h4>
        <p>8 AM to 8 PM (Monday to Saturday) and Sunday 8 AM to 6 PM</p>
        <p>(We offer round-the-clock healthcare services.)</p>
      </div>

      {/* Center: Visiting Hours */}
      <div className="footer-center">
        <h4>Visiting Hours</h4>
        <p><strong>OPD:</strong> 8 AM to 8 PM</p>
        <p><strong>Inpatient:</strong> 11 AM to 7 PM</p>
        <p><strong>ICU:</strong> 11 AM to 1 PM</p>
      </div>

      {/* Extreme Right: Call Info and Quick Links */}
      <div className="footer-right">
        <div className="footer-contact">
          <FaPhoneAlt /> <span>Call us: +91-1234567890</span>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
