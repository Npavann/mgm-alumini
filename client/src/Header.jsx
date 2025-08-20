import React, { useState, useEffect } from "react";
import Amritha_Mahothsava from './assets/Amritha_Mahothsava.png';
import MGMLOGO from './assets/mgm-logo.png';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle sticky navbar on scroll past header
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.getElementById("header-top")?.offsetHeight || 0;
      if (window.scrollY >= headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", link: "/" },
    {
      title: "About",
      dropdown: [
        { label: "Vision & Mission", path: "/vision-mission" },
        { label: "Principal", path: "/principal" },
        { label: "Management", path: "/management" },
        { label: "History", path: "/history" },
        { label: "Image Gallery", path: "/gallery" },
        { label: "Contact us", path: "/contact" },
      ],
    },
    {
      title: "Academics",
      dropdown: [
        { label: "Courses", path: "/courses" },
        { label: "Admissions", path: "/admissions" },
        { label: "Calendar and Magazine", path: "/calendar" },
        { label: "NAAC", path: "/naac" },
        { label: "IQAC", path: "/iqac" },
        { label: "Scholarships", path: "/scholarships" },
        { label: "Rules And Regulations", path: "/rules" },
        { label: "Programme/Course", path: "/programmes" },
      ],
    },
    {
      title: "Faculty and Campus",
      dropdown: [
        { label: "Department", path: "/department" },
        { label: "Library", path: "/library" },
        { label: "Museum", path: "/museum" },
        { label: "Garden", path: "/garden" },
        { label: "Campus Facilities", path: "/facilities" },
        { label: "Campus Blocks", path: "/campus-blocks" },
        { label: "Campus Cells", path: "/campus-cells" },
      ],
    },
    {
      title: "Cultural Centres",
      dropdown: [
        { label: "RGPai Research Centre", path: "/rgpai-research" },
        { label: "Yakshagana Kendra", path: "/yakshagana" },
        { label: "Regional Research Centre", path: "/regional-research" },
      ],
    },
    {
      title: "Activities",
      dropdown: [
        { label: "Alumni", path: "/Alumni-Pavan/Alumni" },
        { label: "NCC and NSS", path: "/NccNss-Ramya/NccNss" },
        { label: "Clubs @ MGM", path: "/Clubs-Vaibhavi/Clubs" },
        { label: "Sports", path: "/Sports-Shilpa/Sports" },
        { label: "Events Calendar", path: "/events" },
        { label: "MGM: What is new?", path: "/WhatsNew" },
      ],
    },
  ];

  return (
    <>
      {/* HEADER SECTION */}
      <div
        id="header-top"
        className="flex flex-wrap items-center justify-between px-6 py-4 bg-gradient-to-r from-[#004080] via-[#0066cc] to-[#0099ff]"
      >
        {/* Logo */}
        <Link to="/">
          <img src={MGMLOGO} alt="College Logo" className="h-28" />
        </Link>

        {/* College Name */}
        <div className="flex-1 text-center font-bold text-3xl md:text-5xl text-[#f3f3eb] font-serif drop-shadow-md">
          Mahatma Gandhi Memorial College Udupi
          <div className="text-sm md:text-lg font-normal text-gray-200 mt-1">
            (Accredited by NAAC with an ‘A+’ Grade (CGPA 3.36) in the IV Cycle of Accreditation)
          </div>
        </div>

        {/* Badge */}
        <img src={Amritha_Mahothsava} alt="75 Year Badge" className="h-24" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl ml-4"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* NAVIGATION SECTION */}
      <nav
        className={`bg-[#003366] border-t-2 border-b-2 border-white transition-all z-50 ${
          isSticky ? "fixed top-0 left-0 w-full" : "relative"
        }`}
        style={{ boxShadow: isSticky ? "0 2px 8px rgba(0,0,0,0.3)" : "none" }}
      >
        <ul
          className={`md:flex md:justify-center md:items-center list-none transition-all duration-300 ${
            navOpen ? "block" : "hidden"
          } md:block`}
        >
          {navLinks.map((nav, idx) => (
            <li key={idx} className="relative group">
              {!nav.dropdown ? (
                <Link
                  className="block px-4 py-3 font-bold text-white hover:bg-white hover:text-[#004080]"
                  to={nav.link}
                  onClick={() => setNavOpen(false)}
                >
                  {nav.title}
                </Link>
              ) : (
                <>
                  <span className="block px-4 py-3 font-bold text-white hover:bg-white hover:text-[#004080] cursor-pointer">
                    {nav.title}
                  </span>
                  {/* Dropdown for desktop */}
                  <ul className="md:absolute md:left-0 hidden md:group-hover:block bg-[#004080] min-w-[180px] shadow-lg z-50 md:mt-0">
                    {nav.dropdown.map((item, i) => (
                      <li
                        key={i}
                        className="border-b border-[#0059b3] last:border-none"
                      >
                        <Link
                          to={item.path}
                          className="block px-4 py-2 text-white hover:bg-white hover:text-[#003366]"
                          onClick={() => setNavOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile dropdown */}
                  {navOpen && (
                    <ul className="md:hidden bg-[#004080]">
                      {nav.dropdown.map((item, i) => (
                        <li
                          key={i}
                          className="border-b border-[#0059b3] last:border-none"
                        >
                          <Link
                            to={item.path}
                            className="block px-6 py-2 text-white hover:bg-white hover:text-[#003366]"
                            onClick={() => setNavOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Padding Spacer for Sticky Nav */}
      {isSticky && <div className="h-16 md:h-16" />}
    </>
  );
}
