import React, { useState, useEffect } from "react";

// Images for carousel
const nccImages = [
  "https://mgmudupi.ac.in/images/NCC.jpg",
  "https://mgmudupi.ac.in/images/NCC1.jpg",
  "https://mgmudupi.ac.in/images/NCC2.jpg",
  "https://mgmudupi.ac.in/images/NCC3.jpg",
  "https://mgmudupi.ac.in/images/NCC4.jpg",
  "https://mgmudupi.ac.in/images/NCC5.jpg",
  "https://mgmudupi.ac.in/images/NCC6.jpg",
];
const rangerImages = ["https://mgmudupi.ac.in/images/Rangers1.jpg"];

const tabsData = [
  {
    label: "NCC (National Cadet Corps)",
    value: "ncc",
    color: "text-blue-600",
    content: (
      <>
        <div className="flex flex-wrap gap-6 mb-6">
          {/* Carousel */}
          <Carousel images={nccImages} />
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              National Cadet Corps (NCC)
            </h2>
            <p className="text-gray-700 mb-3">
              MGM College offers <b>Army</b> and <b>Naval</b> NCC wings
              for boys and girls. Students with an NCC "C" certificate can
              earn extra credit for higher education and employment. Activities
              include parades, training, and social service, with cadets
              participating in major events, parades, and adventurous national
              camps.
            </p>
            <ul className="list-disc pl-5 text-blue-700 text-sm mb-3">
              <li>
                <b>Intake:</b> 50 Naval (Mr Samuel Marwin Pinto), 50 Army
                (Lt. Navya)
              </li>
              <li>
                <b>Eligibility:</b> Open to all from PUC to Degree (Physical
                fitness required)
              </li>
              <li>
                <b>Meeting:</b> Saturday 2–6 PM
              </li>
            </ul>
            <a
              href="https://mgmudupi.ac.in/nccnss.php#National%20Cadet%20Corps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium"
            >
              More about NCC &gt;
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    label: "NSS (National Service Scheme)",
    value: "nss",
    color: "text-orange-500",
    content: (
      <div className="flex flex-wrap gap-6 mb-6">
        <img
          src="https://mgmudupi.ac.in/images/NCC4.jpg"
          alt="NSS"
          className="w-[260px] h-[190px] rounded shadow"
        />
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            National Service Scheme (NSS)
          </h2>
          <p className="text-gray-700 mb-3">
            NSS is rooted in the motto <b>"Not Me But You"</b>. It train students
            to take up social responsibility through awareness programs,
            cleaning drives, plantation, and leadership camps.
          </p>
          <ul className="list-disc pl-5 text-blue-700 text-sm mb-3">
            <li>
              <b>Founded:</b> 1969 (Prof. N Vajrakumar); additional unit
              since 1997–98
            </li>
            <li>
              <b>Units:</b> 2 (200 members)
            </li>
            <li>
              <b>Programme Officers:</b> Mr. Suchith Kotian, Mrs. Rekha N
              Chandra
            </li>
          </ul>
          <a
            href="https://mgmudupi.ac.in/nccnss.php#National%20Service%20Scheme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline font-medium"
          >
            More about NSS &gt;
          </a>
        </div>
      </div>
    ),
  },
  {
    label: "Rangers",
    value: "rangers",
    color: "text-purple-600",
    content: (
      <div className="flex flex-wrap gap-6 mb-6">
        <Carousel images={rangerImages} />
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Rangers</h2>
          <p className="text-gray-700 mb-3">
            MGM Rangers’ Wing (for girls), introduced in 1996, fosters
            self-discipline, cooperation, and a spirit of service among women
            students.
          </p>
          <ul className="list-disc pl-5 text-blue-700 text-sm mb-3">
            <li>
              <b>Convener:</b> Ms. Vanitha, M.Com
            </li>
            <li>
              <b>Origin:</b> Launched by Prof. Premalatha Raj & Miss Aruna
              Kalkur
            </li>
            <li>
              <b>Unit:</b> 20 Rangers, self-financed and self-equipped
            </li>
          </ul>
          <a
            href="https://mgmudupi.ac.in/nccnss.php#Rangers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 underline font-medium"
          >
            More about Rangers &gt;
          </a>
        </div>
      </div>
    ),
  },
];

// Carousel component
function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);
  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div className="flex flex-col items-center">
      <img
        src={images[index]}
        alt="Slide"
        className="w-[260px] h-[190px] rounded shadow-md object-cover"
      />
      {images.length > 1 && (
        <div className="flex gap-4 mt-2">
          <button
            onClick={prev}
            className="bg-gray-100 border px-3 py-1 rounded-full hover:bg-gray-200"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="bg-gray-100 border px-3 py-1 rounded-full hover:bg-gray-200"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default function NccNss() {
  const [activeTab, setActiveTab] = useState(tabsData[0].value);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- Announcement Bar --- */}
      {/* <div className="bg-yellow-50 border-b border-yellow-200 text-center py-2 px-4 relative">
        <span className="text-sm">
          Announcement | SSP Account Creation link:{" "}
          <a
            href="https://ssp.postmatric.karnataka.gov.in/CA/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://ssp.postmatric.karnataka.gov.in/CA/
          </a>
        </span>
      </div> */}

      {/* --- Top Navbar --- */}
      {/* <div className="bg-white border-b px-6 py-3 flex justify-between items-center">
        <div className="flex gap-6 text-sm text-gray-600">
          <span>Social Media Hub ▼</span>
          <span>Login Hub ▼</span>
          <span>Information for ▼</span>
          <span>Careers ▼</span>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSenTbBdErlrlLYSUNQB_h4_1XQjS2rZjfgxGhyU-d1ybegGWw/viewform"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          APPLY
        </a>
      </div> */}

      {/* --- NCC NSS Rangers Content --- */}
      <div className="max-w-5xl mx-auto bg-white my-6 p-6 rounded-lg shadow">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-extrabold text-blue-900 mb-2">
            NCC, NSS & Rangers at MGM College
          </h1>
          <p className="text-gray-600">
            MGM students participate in NCC, NSS, Rangers and a variety of
            activities for credit and all-round development.
          </p>
        </header>

        {/* Tabs */}
        <nav className="flex justify-center gap-4 mb-6 flex-wrap">
          {tabsData.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-t font-semibold border-b-2 ${
                activeTab === tab.value
                  ? "bg-white border-blue-600 text-blue-800"
                  : "bg-gray-100 border-transparent text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <section>
          {tabsData.find((t) => t.value === activeTab)?.content}
        </section>
      </div>
    </div>
  );
}