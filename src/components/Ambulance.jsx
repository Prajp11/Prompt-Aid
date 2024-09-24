import React, { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaChevronUp, FaChevronDown } from "react-icons/fa";  
import '../App.css'; 
import AmbulanceImage from '../Images/AmbulanceServ.jpg'; 
import patientAmbu from '../Images/AmbulanceImages/patient-ambu.png'; 
import basicAmbu from '../Images/AmbulanceImages/basic-ambu.png'; 
import advanceAmbu from '../Images/AmbulanceImages/advance-ambu.png';  
import trainAmbu from '../Images/AmbulanceImages/train-ambu.png';  
import firstAid from '../Images/AmbulanceImages/firstaid.png'; 
import oxygen from '../Images/AmbulanceImages/oxygen.png'; 
import stretcher from '../Images/AmbulanceImages/stretcher.png'; 
import ecgMachine from '../Images/AmbulanceImages/ecgmacine.png';  
import wheelchair from '../Images/AmbulanceImages/Wheel_Chair.png';
import MFR from '../Images/AmbulanceImages/MedicalFirstresponder.png';
import deadambu from '../Images/AmbulanceImages/dead-ambu.png';

// Data for ambulance services
const ambulanceData = [
  {
    id: 1,
    name: "Patient Transfer",
    imgSrc: patientAmbu,
    description: "Patient transfer services are for safe transport of patients between healthcare facilities or from home to hospital. These ambulances ensure comfort and safety for patients during transit.",
    equipment: [firstAid, oxygen],
  },
  {
    id: 2,
    name: "Basic Life Support (BLS)",
    imgSrc: basicAmbu,
    description: "Basic Life Support ambulances offer basic medical care and transport for non-critical patients. They come equipped with essential medical supplies.",
    equipment: [firstAid, stretcher],
  },
  {
    id: 3,
    name: "Advance Life Support (ALS)",
    imgSrc: advanceAmbu,
    description: "Advanced Life Support ambulances provide critical medical care with advanced equipment such as ECG, defibrillators, and more.",
    equipment: [oxygen, firstAid, stretcher, ecgMachine],
  },
  {
    id: 4,
    name: "Train Ambulance",
    imgSrc: trainAmbu,
    description: "Train ambulances are used for long-distance patient transfers across cities, providing medical care during transit.",
    equipment: [oxygen, firstAid, wheelchair, stretcher],
  },
  {
    id: 5,
    name: "Veterinary Small",
    imgSrc: MFR,
    description: "Small veterinary ambulances for safe and secure transfer of animals, equipped with specialized handling equipment.",
    equipment: [firstAid, stretcher],
  },
  {
    id: 6,
    name: "Veterinary Large",
    imgSrc: patientAmbu,
    description: "Large veterinary ambulances for safe and secure transfer of animals, equipped with specialized handling equipment.",
    equipment: [firstAid],
  },
  {
    id: 7,
    name: "Patient Transfer - AC",
    imgSrc: patientAmbu,
    description: "AC ambulances for patient transfer provide climate-controlled environments for enhanced patient comfort, especially in longer transfers.",
    equipment: [firstAid, oxygen, stretcher],
  },
  {
    id: 8,
    name: "Basic Life Support (BLS) - AC",
    imgSrc: basicAmbu,
    description: "AC-equipped BLS ambulances provide climate control for enhanced comfort during patient transport along with basic life-saving equipment.",
    equipment: [firstAid, stretcher],
  },
  {
    id: 9,
    name: "Dead Body",
    imgSrc: deadambu,
    description: "Ambulances to carry body to a specific location for drop or pick-up service.",
    equipment: [stretcher],
  },
  {
    id: 10,
    name: "Dead Body - Fridge",
    imgSrc: deadambu,
    description: "Ambulances equipped with refrigerated compartments to preserve the body during transport over long distances.",
    equipment: [stretcher],
  },
];

const faqData = [
  {
    question: "How can I call for an ambulance in Pune?",
    answer: "To call an ambulance in Pune, you can call the government toll-free numbers 102 or 108 or book an ambulance online from our hospital. We will be at your doorstep within 15-20 minutes."
  },
  {
    question: "How can I book an ambulance from the site?",
    answer: "You can visit our website and contact us at +91-1234567890. Our executives will assist you in booking the necessary ambulance within a few seconds."
  },
  {
    question: "When should I call for an ambulance?",
    answer: "You should call an ambulance for the safe transfer of critically ill patients, immobility (e.g., fractures), pregnancy cases, or even life-support transport."
  },
  {
    question: "What types of ambulances do you provide?",
    answer: "We provide a range of ambulances, including Patient Transfer, Basic Life Support (BLS), Advance Life Support (ALS), and more."
  },
  {
    question: "What are the charges for ambulance services?",
    answer: "Charges vary based on the type of service. You can contact us directly to know the exact pricing for each type of ambulance."
  }
];

const Ambulance = () => {
  const [selectedService, setSelectedService] = useState(ambulanceData[0]);  // Default selection
  const [expandedFAQ, setExpandedFAQ] = useState(null);  // Track the expanded FAQ

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);  // Toggle between open and closed
  };

  return (
    <div className="ambulance-container">
      {/* Image Section with Overlay Contact Number */}
      <div className="ambulance-image-section">
        <img src={AmbulanceImage} alt="Ambulance Service" className="ambulance-img" />
        <div className="contact-number-overlay">
          <h2>Contact Us: +91-1234567890</h2>
        </div>
      </div>

      {/* Information Section */}
      <section className="ambulance-info">
        <h1>Ambulance Services In Pune</h1>
        <p>
          We provide the best ambulance services in your area. Healing-Hands Hospital has partnered with top private ambulance providers in Pune to offer fast and reliable ambulance transportation. All basic and advanced medical equipment is included, and we offer 24-hour Emergency Services and support.
        </p>

        {/* Enquiry Form */}
        <h2>Fill out the form to enquire now</h2>
        <form className="ambulance-form">
          <div className="form-group">
            <FaUser className="input-icon" />
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <FaPhoneAlt className="input-icon" />
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}" />
          </div>
          <div className="form-group">
            <FaEnvelope className="input-icon" />
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <button type="submit" className="submit-btn">Send Enquiry</button>
        </form>

        {/* Types of Ambulances with Two-Block Structure */}
        <h2>Types of Ambulances We Provide</h2>
        <div className="ambulance-types-container">
          {/* Left Block: Clickable Logos */}
          <div className="ambulance-left">
            {ambulanceData.map((service) => (
              <div 
                key={service.id} 
                className="ambulance-logo-block" 
                onClick={() => setSelectedService(service)}
              >
                <img src={service.imgSrc} alt={service.name} />
                <h3>{service.name}</h3>
              </div>
            ))}
          </div>

          {/* Right Block: Information */}
          <div className="ambulance-right">
            <h2>{selectedService.name}</h2>
            <p>{selectedService.description}</p>
            <div className="reference-images">
              {selectedService.equipment.map((img, index) => (
                <img key={index} src={img} alt="equipment" className="reference-img" />
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-section">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                {expandedFAQ === index ? <FaChevronUp className="faq-icon" /> : <FaChevronDown className="faq-icon" />}
              </div>
              {expandedFAQ === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ambulance;

