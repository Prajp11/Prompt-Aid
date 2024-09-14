import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";  // Use Homepage.jsx for home tab
import About from "./components/About";        // Shared About component
import Ambulance from "./components/Ambulance";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />  {/* Home tab uses Homepage.jsx */}
        <Route path="/about" element={<About />} />  {/* Shared About component */}
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
