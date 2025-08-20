import React, { useState } from "react";
// import Header from "../Header";
// import Footer from "../Footer";
import BackToTop from "../../BackToTop";

// Import all images from assets folder
// Example imports; replace or add your actual images here

import vishwanathImg from "../../assets/Clubs-Vaibhavi/vishwanath.jpg";
import anupamaImg from "../../assets/Clubs-Vaibhavi/anupama.jpg";

import vidyanathImg from "../../assets/Clubs-Vaibhavi/vidyanath.jpg";
import puthiImg from "../../assets/Clubs-Vaibhavi/puthi.jpg";

import vasumathiImg from "../../assets/Clubs-Vaibhavi/vasumathi.jpg";
import ashwiniImg from "../../assets/Clubs-Vaibhavi/ashwini.jpg";

import rashmiImg from "../../assets/Clubs-Vaibhavi/rashmi.jpg";
import rajamoorthyImg from "../../assets/Clubs-Vaibhavi/rajmoorthy.jpg";

import rekhaImg from "../../assets/Clubs-Vaibhavi/rekha.jpg";
import jyothsnaImg from "../../assets/Clubs-Vaibhavi/jyothsna.jpg";
import rakshaImg from "../../assets/Clubs-Vaibhavi/raksha.jpg";

// Clubs data with images imported from assets
const clubs = [
  {
    name: "Commerce Club",
    convener: "Mrs.Smitha",
    convenerImg: undefined,
    coConvener: "Mr.Vikas Shetty",
    coConvenerImg:undefined,
    description:
      "Promotes business related activities, workshop, and competition for students interested in commerce.",
  },
  {
    name: "IT Club",
    convener: "Dr.Vishwanath Pai M",
    convenerImg: vishwanathImg,
    coConvener: "Mrs.Anupama Ajith",
    coConvenerImg: anupamaImg,
    description:
      "Organizes IT seminar, workshop and conduct coding and quiz to inspire technology learning",
  },
  {
    name: "Science Club",
    convener: "Mrs.Umadevi",
    convenerImg: undefined,
    coConvener: "Mrs.Vasavi",
    coConvenerImg: undefined,
    description:
      "Encourages scientific thinking and organizes exhibitions and science quizzes",
  },
  {
    name: "Arts Club",
    convener: "Mr.Vidhyanath K",
    convenerImg: vidyanathImg,
    coConvener: "",
    coConvenerImg: undefined,
    description:
      "Encourages scientific thinking and organizes exhibitions and scie",
  },
  {
    name: "Fine Arts Club",
    convener: "Dr.Puthi Vasanth Kumar",
    convenerImg: puthiImg,
    coConvener: "Mrs.Spoorthy Fernandes",
    coConvenerImg: undefined,
    description: "Focuses on all forms of visual and performing arts",
  },
  {
    name: "Yakshagana and Nataka Ranga",
    convener: "Mr.Ragavendra Thunga",
    convenerImg: undefined,
    coConvener: "Mr.Sandeep Shettigar",
    coConvenerImg: undefined,
    description: "Promotes traditional arts like yakshagana and drama",
  },
  {
    name: "Eco club",
    convener: "Dr.Maneetha",
    convenerImg: undefined,
    coConvener: "Mrs.Shruthi",
    coConvenerImg: undefined,
    description: "Raises envronmental activities and leads greening activities",
  },
  {
    name: "Literary Forum",
    convener: "Dr.Vasumathi Bhat",
    convenerImg: vasumathiImg,
    coConvener: "Mrs.Ashwini Acharya",
    coConvenerImg: ashwiniImg,
    description: "Organizes literary events,debates,and writing competitions",
  },
  {
    name: "Sports Club",
    convener: "Mrs.Jayashree Nayak",
    convenerImg: undefined,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Coordinates sports and athletic events throughout the year",
  },
];

// Cells data
const cells = [
  {
    name: "Teaching and Learning Centre",
    convener: "Mr.Arun Kumar B",
    convenerImg: undefined,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Supports innovative teaching practices and faculty devlopment",
  },
  {
    name: "Placement Cell",
    convener: "Dr.Vishwanath Pai M",
    convenerImg: vishwanathImg,
    coConvener: "Mrs.Rashmi",
    coConvenerImg: rashmiImg,
    description: "Provides career guidance and organizes campus recruitment",
  },
  {
    name: "Skill Development Cell",
    convener: "Mr.Rajmoorthy Rao",
    convenerImg: rajamoorthyImg,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Enhance student soft and hard skills for employability",
  },
  {
    name: "Alumini Cell",
    convener: "Mrs.Adithi",
    convenerImg: undefined,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Connects alumini with institution",
  },
  {
    name: "Research Cell",
    convener: "Dr.Vasumathi Bhat",
    convenerImg: vasumathiImg,
    coConvener: "Dr.Vijayalakshmi",
    coConvenerImg: undefined,
    description: "Promotes research activities and organizes workshop",
  },
  {
    name: "Human Rights and Religious Harmony Cell",
    convener: "Mr.Subodh Pai",
    convenerImg: undefined,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Spreads awarness on human rights and religious harmony",
  },
  {
    name: "Scholarship Counselling Cell",
    convener: "Mr.Vidhyanath",
    convenerImg: vidyanathImg,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Guides students regarding scholarship opportunities",
  },
];

// Committees data
const committees = [
  {
    name: "Anti-Ragging Committee",
    convener: "Principal",
    convenerImg: undefined,
    coConvener: "Staff Council",
    coConvenerImg: undefined,
    description: "Ensures safe environment by preventing ragging in college",
  },
  {
    name: "SC and ST Cell",
    convener: "",
    convenerImg: undefined,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Supports welfare of SC/ST students",
  },
  {
    name: "Student Grievance and Counselling Cell",
    convener: "",
    convenerImg: undefined,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Addresses student grievances and provide counselling",
  },
  {
    name: "Women's Harassment Redressal Cell",
    convener: "",
    convenerImg: undefined,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Ensures women's safety and handles harassment complaints",
  },
  {
    name: "Women's Counsellor",
    convener: "Mrs.Rekha N Chandra",
    convenerImg: rekhaImg,
    coConvener: "Mrs.Jyothsna",
    coConvenerImg: jyothsnaImg,
    description: "Provides counselling and support for women",
  },
  {
    name: "Women's Welfare Cell",
    convener: "Mrs.Raksha Shenoy",
    convenerImg: rakshaImg,
    coConvener: "",
    coConvenerImg: undefined,
    description: "Coordinates activities for women's welfare",
  },
];

function Section({ items, sectionTitle, onRowClick }) {
  return (
    <div className="mb-10">
      <h3 className="mt-7 mb-3 text-blue-900 font-bold text-xl">{sectionTitle}</h3>
      <div className="overflow-x-auto rounded-xl border border-gray-300 shadow">
        <table className="min-w-full table-fixed bg-white border-collapse">
          <thead>
            <tr>
              <th className="w-1/3 bg-blue-900 text-white text-center font-bold py-3 px-5 border-b border-gray-400 rounded-tl-xl">
                Name
              </th>
              <th className="w-1/3 bg-blue-900 text-white text-center font-bold py-3 px-5 border-b border-gray-400 ">
                Convener
              </th>
              <th className="w-1/3 bg-blue-900 text-white text-center font-bold py-3 px-5 border-b border-gray-400 rounded-tr-xl">
                Co-Convener
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr
                key={idx}
                onClick={() => onRowClick(item)}
                className={`
                  cursor-pointer
                  transition
                  ${idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                  hover:bg-yellow-100
                `}
              >
                <td className="w-1/3 py-2 px-4 text-lg font semibold border-b border-gray-200">{item.name}</td>
                <td className="w-1/3 py-2 px-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 min-h-[40px]">
                    {item.convenerImg && (
                      <img
                        src={item.convenerImg}
                        alt={item.convener}
                        className="w-10 h-10 object-cover rounded-full border-2 border-blue-600 bg-white"
                      />
                    )}
                    <span className="text-lg font semibold">{item.convener}</span>
                  </div>
                </td>
                <td className="w-1/3 py-2 px-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 min-h-[40px]">
                    {item.coConvenerImg && (
                      <img
                        src={item.coConvenerImg}
                        alt={item.coConvener}
                        className="w-10 h-10 object-cover rounded-full border border-blue-600 bg-white"
                      />
                    )}
                    <span className="text-lg font semibold">{item.coConvener}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Clubs() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <>
      {/* <Header /> */}
      <div className="max-w-5xl mx-auto mt-10 mb-12 bg-white rounded-2xl shadow-xl p-9">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-blue-900 bg-blue-100 rounded-lg py-4 px-3 mb-4 border border-blue-200 shadow">
            Activities: Clubs, Cells and Committees
          </h2>
          <div className="text-base text-blue-700 mt-3 font-normal tracking-wide">
            Discover the vibrant student life at MGM College
            <br />
            Explore the clubs, cells and committees with their dedicated conveners and co-conveners driving excellence and engagement.
          </div>
        </div>
        <Section items={clubs} sectionTitle="Clubs" onRowClick={setSelectedItem} />
        <Section items={cells} sectionTitle="Cells" onRowClick={setSelectedItem} />
        <Section items={committees} sectionTitle="Committees" onRowClick={setSelectedItem} />

        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-300 min-w-[300px] max-w-xs text-center animate-modal-in"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "modalIn 0.26s" }}
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{selectedItem.name}</h3>
              <p className="text-gray-800 mb-6">{selectedItem.description}</p>
              <button
                className="bg-yellow-400 hover:bg-blue-700 hover:text-white text-blue-900 font-bold py-1.5 px-6 rounded transition"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        {/* Modal animation */}
        <style>
          {`@keyframes modalIn {
            from {transform: translateY(40px) scale(0.97); opacity:0.7;}
            to {transform: translateY(0) scale(1); opacity: 1;}
          }
          .animate-modal-in {
            animation: modalIn 0.26s;
          }`}
        </style>
      </div>
      {/* <Footer /> */}
      <BackToTop/>
    </>
  );
}

export default Clubs;