import React from 'react';
import '../App.css'; 

// Importing images for each package
import basicImg from '../Images/ServicesImages/basic.png';
import fullbodyImg from '../Images/ServicesImages/fullbodycheck.jpg';
import diabeticImg from '../Images/ServicesImages/diabetic.png';
import heartImg from '../Images/ServicesImages/heart.jpg';
import liverImg from '../Images/ServicesImages/liver.jpg';
import kidneyImg from '../Images/ServicesImages/kidney.jpg';
import thyroidImg from '../Images/ServicesImages/thyroid.png';
import cancerImg from '../Images/ServicesImages/cancer.png';
import orthopedicImg from '../Images/ServicesImages/orthopedic.jpg';
import eyeImg from '../Images/ServicesImages/eye.jpg';
import dentalImg from '../Images/ServicesImages/dental.jpg';
import seniorImg from '../Images/ServicesImages/seniorcz.png';

const packages = [
  { title: 'Basic Health Checkup', details: 'Blood Test (CBC, Blood Sugar), ECG, Blood Pressure Monitoring, Basic Physical Examination', additional: 'Ideal for individuals seeking a general overview of their health status. It helps in detecting common issues such as anemia, infections, or early signs of heart disease.', rate: '₹2000', image: basicImg },
  { title: 'Full Body Checkup', details: 'Complete Blood Test, MRI, X-Ray, BP Monitoring', additional: 'Comprehensive assessment of vital organs like the heart, lungs, and liver. Recommended for early detection of any underlying health issues.', rate: '₹5000', image: fullbodyImg },
  { title: 'Diabetes Checkup', details: 'Blood Sugar Test, HbA1c Test, Eye Checkup', additional: 'Specially designed for individuals at risk of or managing diabetes. It helps monitor sugar levels and detect complications related to diabetes such as retinopathy.', rate: '₹1500', image: diabeticImg },
  { title: 'Heart Checkup', details: 'ECG, Echocardiogram, Lipid Profile', additional: 'Focused on cardiovascular health, this checkup is ideal for individuals with a family history of heart disease or experiencing symptoms such as chest pain or shortness of breath.', rate: '₹3500', image: heartImg },
  { title: 'Liver Function Test', details: 'Blood Test, Gamma-GT Test, Liver Ultrasound', additional: 'Helps assess the functioning of the liver and diagnose conditions such as hepatitis, fatty liver, or liver cirrhosis.', rate: '₹1800', image: liverImg },
  { title: 'Kidney Function Test', details: 'Blood Test, Urine Test, Kidney Ultrasound', additional: 'Designed to detect kidney-related issues such as chronic kidney disease, infections, or stones.', rate: '₹2200', image: kidneyImg },
  { title: 'Thyroid Checkup', details: 'Blood Test (T3, T4, TSH), Thyroid Ultrasound', additional: 'Useful for detecting thyroid imbalances like hypothyroidism or hyperthyroidism.', rate: '₹2500', image: thyroidImg },
  { title: 'Cancer Screening', details: 'Blood Test, Mammogram, Pap Smear, Ultrasound', additional: 'This screening helps in early detection of cancer in individuals at higher risk due to family history or lifestyle factors.', rate: '₹6000', image: cancerImg },
  { title: 'Orthopedic Checkup', details: 'X-Ray, Bone Density Test, MRI', additional: 'Ideal for individuals with joint pain, stiffness, or injury. Helps detect issues like arthritis or bone degeneration.', rate: '₹4000', image: orthopedicImg },
  { title: 'Eye Checkup', details: 'Vision Test, Retinal Exam, Eye Pressure Test', additional: 'Ensures good eye health and helps in early detection of vision issues, glaucoma, or cataracts.', rate: '₹1200', image: eyeImg },
  { title: 'Dental Checkup', details: 'Oral Exam, X-Ray, Scaling & Cleaning', additional: 'Recommended for maintaining oral hygiene and preventing dental issues such as cavities, gum disease, or tooth decay.', rate: '₹1000', image: dentalImg },
  { title: 'Senior Citizen Checkup', details: 'Blood Test, Bone Density Test, ECG, Vision & Hearing Test', additional: 'Tailored for elderly individuals, this checkup covers essential tests for detecting age-related issues like osteoporosis, heart problems, or vision and hearing impairments.', rate: '₹3000', image: seniorImg },
];

const Service = () => {
  return (
    <div className="service-container">
      {packages.map((pkg, index) => (
        <div key={index} className="flip-card">
          <div className="flip-card-inner">
            {/* Front of the card */}
            <div className="flip-card-front">
              <img src={pkg.image} alt={pkg.title} className="package-img" />
              <h3>{pkg.title}</h3>
            </div>
            {/* Back of the card */}
            <div className="flip-card-back">
              <h3>{pkg.title}</h3>
              <p>{pkg.details}</p>
              <p><strong>Additional Information:</strong> {pkg.additional}</p>
              <p><strong>Price:</strong> {pkg.rate}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
