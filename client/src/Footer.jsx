import React from "react";
import mgm_logo_footer from './assets/mgm_logo_footer.png';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const columns = [
    {
      title: "About",
      links: [
        "Vision & Mission",
        "Principal",
        "Management",
        "History",
        "Image Gallery",
        "Contact",
      ],
    },
    {
      title: "Academics",
      links: [
        "Courses",
        "Calendar and Magazine",
        "NAAC",
        "IQAC",
        "Scholarships",
        "Rules and Regulations",
        "Program/Courses",
      ],
    },
    {
      title: "Admissions",
      links: [
        "Overview",
        "How to Apply",
        "Undergraduate",
        "Postgraduate",
        "Evening College",
        "Fees",
        "Apply for Scholarships",
      ],
    },
    {
      title: "Campus Life",
      links: [
        "Overview",
        "Our Campus",
        "Why MGM",
        "Student Services",
        "Career Center",
        "Student Policies",
      ],
    },
    {
      title: "Research",
      links: ["Overview", "Research Committee", "Research at MGM College"],
    },
  ];

  return (
    <footer className="bg-[#f9f6f6] p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left section */}
        <div className="flex-1 min-w-[250px] mr-10 mb-10 md:mb-0">
          <img
            src={mgm_logo_footer}
            alt="College Logo"
            className="max-w-[330px] max-h-[250px] mb-4"
          />
          <div className="text-sm space-y-1">
            <p>📍 Kunjibettu, Udupi, Karnataka - 576106</p>
            <p>✉️ principal_mgm@yahoo.com</p>
            <p>📞 0820-2520359, 0820-253041</p>
          </div>
          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-[#0066cc] text-lg">
            <a
              href="https://www.instagram.com/mgm_journalism_"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/school/mgm-college-udupi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@MGM.Journalism"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
        {/* Right columns SINGLE line (no wrap for md and up) */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 w-full md:w-auto">
          {columns.map((col, idx) => (
            <div key={idx} className="min-w-[140px]">
              <h4 className="text-[#0066cc] font-bold mb-2">{col.title}</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {col.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Legal/credits block: always full width at bottom */}
      <div className="w-full text-center text-sm text-gray-600 mt-10">
        <p>©2025 Mahatma Gandhi Memorial College,Udupi</p>
        <p>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Disclaimer
          </a>
        </p>
        <p>Developed By MSc Students ❤️</p>
      </div>
    </footer>
  );
}
