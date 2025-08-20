import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Facilities from "./Components/Facilities-Thejas/Facilities";
import WhatsNew from "./Components/WhatsNew-Divya/WhatsNew";
import Events from "./Components/Events-karthikRaj/Events";
import Sports from "./Components/Sports-Shilpa/Sports";
import Clubs from "./Components/Clubs-Vaibhavi/Clubs";
import Alumni from "./Components/Alumni-Pavan/Alumni";
import NccNss from "./Components/NccNss-Ramya/NccNss";

// Dummy components for demo
function Home() {
  return <div className="p-8">Welcome to Home Page</div>;
}
function VisionMission() {
  return <div className="p-8">Vision & Mission content here</div>;
}
function Principal() {
  return <div className="p-8">Principal content here</div>;
}
function Management() {
  return <div className="p-8">Management content here</div>;
}
function History() {
  return <div className="p-8">History content here</div>;
}
function Gallery() {
  return <div className="p-8">Image Gallery content here</div>;
}
function Contact() {
  return <div className="p-8">Contact us content here</div>;
}
// 404 fallback component
function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/management" element={<Management />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Facilities */}
        <Route path="/facilities" element={<Facilities />} />

        {/* Activities */}
        <Route path="/alumni-pavan/alumni" element={<Alumni />} />
        <Route path="/NccNss-Ramya/NccNss" element={<NccNss />} />
        <Route path="/clubs-vaibhavi/clubs" element={<Clubs />} />
        <Route path="/sports-shilpa/sports" element={<Sports />} />
        <Route path="/whatsnew" element={<WhatsNew />} />

        {/* Events with nested routing */}
        {/* Events component handles /events and /events/:slug */}
        <Route path="/events/*" element={<Events />} />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
