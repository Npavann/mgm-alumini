import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Image imports
import giphyGif from "../../assets/Events-KarthikRaj/events/giphy.gif";
import musicEventImg from "../../assets/Events-KarthikRaj/events/music.jpg";
import Cluster2k25Img from "../../assets/Events-KarthikRaj/events/Cluster2k25.JPG";
import Elixir2K25Img from "../../assets/Events-KarthikRaj/events/Elixir2K25.JPG";
import MBCAsessionImg from "../../assets/Events-KarthikRaj/events/Evening-BCA-Session.JPG";
import galleryImg from "../../assets/Events-KarthikRaj/events/gallery.jpg";
import EBCAsessionImg from "../../assets/Events-KarthikRaj/events/Morning-BCA-Session.JPG";
import IOSnativeImg from "../../assets/Events-KarthikRaj/events/ios&native.png";
import talkImg from "../../assets/Events-KarthikRaj/events/talk.jpg";
import amruthamahotsavaImg from "../../assets/Events-KarthikRaj/events/amruthamahotsava.jpg";
import Spectrum2k24Img from "../../assets/Events-KarthikRaj/events/Spectrum2K24.JPG";
import RaniAbbakkaProgramImg from "../../assets/Events-KarthikRaj/events/Rani-Abbakka-Program.jpg";
import coldplayImg from "../../assets/Events-KarthikRaj/events/coldplay.jpg";
import ragudixitImg from "../../assets/Events-KarthikRaj/events/ragudixit.jpg";

const featuredEvents = [
  {
    title: "Orchestra by Swadham Band",
    date: "Monday, August 6, 2025",
    time: "6pm to 8pm",
    description:
      "A night of world-class music performances at Mudana Mantapa, MGM. Entry is free for all campus members.",
    image: musicEventImg,
    cta: "Register Now",
  },
  {
    title: "Orchestra by Ragudixith",
    date: "Monday, August 6, 2025",
    time: "6pm to 8pm",
    description:
      "A night of world-class music performances at Mudana Mantapa, MGM. Entry is free for all campus members.",
    image: ragudixitImg,
    cta: "Register Now",
  },
  {
    title: "ColdPlay World Tour",
    date: "Friday, August 15, 2025",
    time: "4pm to 11pm",
    description:
      "A night of world-class music performances at Mudana Mantapa, MGM. Entry is free for all campus members.",
    image: coldplayImg,
    cta: "Register Now",
  },
];

const eventList = [
  {
    title: "Cluster 2k25.",
    date: "Jul 26, 2025",
    time: "1:00pm-2:30pm",
    desc: "Cluster 2k25.",
    image: Cluster2k25Img,
    type: "Talk",
    location: "A.V Hall",
  },
  {
    title: "An initiative dedicated to honoring & promoting history & legacy of a legendary queen & freedom fighter from Karnataka",
    date: "Aug 3 – Sep 3, 2025",
    time: "1:00pm-3:00pm",
    desc: "Small talk about Rani Abbakka.",
    image: RaniAbbakkaProgramImg,
    type: "History",
    location: "A.V Hall",
  },
  {
    title: "PG session for UG Evening BCA Undergraduates 2k25",
    date: "Apr 9, 2025",
    time: "3:00pm-5:30pm",
    desc: "About MSc Computer Science.",
    image: EBCAsessionImg,
    type: "Session",
    location: "CS Lab",
  },
  {
    title: "PG session for UG Morning BCA Undergraduates 2k25",
    date: "Apr 9, 2025",
    time: "1:00pm-2:30pm",
    desc: "About MSc Computer Science.",
    image: MBCAsessionImg,
    type: "Session",
    location: "CS Lab",
  },
  {
    title: "PG session for UG Morning BCA Undergraduates 2k25",
    date: "Aug 13, 2025",
    time: "1:00pm – 2:30pm",
    desc: "About MSc Computer Science.",
    image: galleryImg,
    type: "Session",
    location: "Webinar",
  },
  {
    title: "Elixir 2K25: Chemistry Fest Oraganised by Manglore University",
    date: "Apr 3, 2025",
    time: "9:00am-5:00pm",
    desc: "Manglore University Elixir 2K25",
    image: Elixir2K25Img,
    type: "Fest",
    location: "Manglore University",
  },
  {
    title: "2 day Workshop on Basics of React Native and IOS Application.",
    date: "Apr 14-15, 2025",
    time: "9am – 5pm",
    desc: "Workshop on React Native & IOS App.",
    image: IOSnativeImg,
    type: "Workshop",
    location: "CS Lab",
  },
  {
    title: "Workshop on Hardware Implimentation on Internet of Things.",
    date: "Sep 3, 2025",
    time: "1:00pm-5:00pm",
    desc: "Workshop on IOT.",
    image: talkImg,
    type: "Workshop",
    location: "Gallery West",
  },
  {
    title: "Amrutha Mahotsava: Celebrating 75th year Anniversary of MGM College.",
    date: "Nov 29 - Dec 1, 2024",
    time: "8:30pm",
    desc: "Amrutha Mahotsava.",
    image: amruthamahotsavaImg,
    type: "Screening",
    location: "Field Lawn",
  },
  {
    title: "Spectrum 2k24: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2024",
    time: "5:30pm",
    desc: "Spectrum 2k24.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k23: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2023",
    time: "5:30pm",
    desc: "Spectrum 2k23.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k22: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2022",
    time: "5:30pm",
    desc: "Spectrum 2k22.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k21: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2021",
    time: "5:30pm",
    desc: "Spectrum 2k21.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  {
    title: "Spectrum 2k20: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2020",
    time: "5:30pm",
    desc: "Spectrum 2k20.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
];

const filters = ["All", "Past", "Today", "Month"];

const getUnique = (arr, key) =>
  Array.from(
    new Set(
      arr.map((ev) => {
        if (key === "year") {
          const match = ev.date.match(/\b(19|20)\d{2}\b/);
          return match ? match[0] : "";
        }
        return ev[key];
      })
    )
  )
    .filter(Boolean)
    .sort();

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

const EventCalendar = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [modalEventTypes, setModalEventTypes] = useState([]);
  const [modalLocations, setModalLocations] = useState([]);
  const [modalYears, setModalYears] = useState([]);
  const dateInputRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((idx) => (idx + 1) % featuredEvents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        setFilterModalOpen(false);
        setDateModalOpen(false);
      }
    }
    if (filterModalOpen || dateModalOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKey);
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [filterModalOpen, dateModalOpen]);

  const currentFeaturedEvent = featuredEvents[currentFeatureIndex];

  // Filtering logic
  let filteredEvents = [...eventList];
  if (selectedDate) {
    const [yyyy, mm, dd] = selectedDate.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Sept",
    ];
    const month = monthNames[parseInt(mm, 10) - 1];
    filteredEvents = filteredEvents.filter(
      (ev) =>
        ev.date.includes(`${month} ${parseInt(dd, 10)}`) ||
        ev.date.includes(`${month} ${dd}`) ||
        ev.date.includes(`${month}`)
    );
  }
  if (!selectedDate) {
    if (activeFilter === "Today") {
      filteredEvents = filteredEvents.filter((ev) => ev.date === "Aug 1, 2025");
    } else if (activeFilter === "Month") {
      filteredEvents = filteredEvents.filter(
        (ev) =>
          ev.date.includes("Aug") || ev.date.includes("Sep") || ev.date.includes("Sept")
      );
    } else if (activeFilter === "Past") {
      filteredEvents = [];
    }
  }
  if (modalEventTypes.length > 0) {
    filteredEvents = filteredEvents.filter((ev) => modalEventTypes.includes(ev.type));
  }
  if (modalLocations.length > 0) {
    filteredEvents = filteredEvents.filter((ev) =>
      modalLocations.includes(ev.location)
    );
  }
  if (modalYears.length > 0) {
    filteredEvents = filteredEvents.filter((ev) => {
      const match = ev.date.match(/\b(19|20)\d{2}\b/);
      return match && modalYears.includes(match[0]);
    });
  }

  const handleDatePicked = (date) => {
    setSelectedDate(date);
    setActiveFilter("All");
    setDateModalOpen(false);
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50 pb-8">
      {/* Featured event */}
      <section
        className="relative py-8 rounded-lg max-w-7xl mx-auto mb-8 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${giphyGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
            <span className="text-yellow-400 mr-2">Events</span>
            Calendar
          </h1>
          <div className="flex flex-wrap bg-white rounded-2xl shadow-lg items-stretch overflow-hidden mb-8 min-h-[230px] max-w-3xl mx-auto">
            <img
              src={currentFeaturedEvent.image}
              alt={currentFeaturedEvent.title}
              className="w-[250px] min-h-[200px] h-full object-cover flex-shrink-0"
            />
            <div className="flex flex-col flex-1 min-w-[220px] justify-between px-8 py-6">
              <h2 className="text-2xl font-bold text-indigo-900 m-0">
                {currentFeaturedEvent.title}
              </h2>
              <div className="my-2">
                <span className="text-gray-800 font-semibold text-base">
                  {currentFeaturedEvent.date}
                </span>
                <span className="ml-6 text-gray-800 font-medium text-sm">{currentFeaturedEvent.time}</span>
              </div>
              <p className="text-base text-gray-700">{currentFeaturedEvent.description}</p>
              <a
                href="#"
                className="bg-indigo-900 text-white rounded-xl px-6 py-2.5 font-bold tracking-wide mt-2 w-fit shadow"
              >
                {currentFeaturedEvent.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and date picker buttons */}
      <div className="max-w-5xl mx-auto flex gap-5 flex-wrap px-5 items-center">
        {/* Filter button */}
        <button
          onClick={() => setFilterModalOpen(true)}
          className="bg-red-900 text-white rounded-lg px-8 py-3 font-semibold text-lg flex items-center gap-2 shadow focus:outline-none"
        >
          <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
            <path d="M3 6h18M7 12h10M10 18h4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Filter
        </button>
        {filterModalOpen && (
          <div
            className="fixed inset-0 z-[10001] flex items-center justify-center bg-purple-900/30"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={() => setFilterModalOpen(false)}
          >
            <div
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-sm w-full min-w-[340px] p-8 max-h-[86vh] overflow-y-auto flex flex-col relative"
            >
              <button
                onClick={() => setFilterModalOpen(false)}
                aria-label="Close Filter"
                className="absolute right-4 top-3 text-2xl font-bold cursor-pointer bg-none border-none"
              >×</button>
              <h3 className="text-pink-900 mb-5 font-bold">Filter Events</h3>
              {/* Event Type filter */}
              <div className="mb-6">
                <strong>Event Type</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {getUnique(eventList, "type").map(type => (
                    <label key={type} className="cursor-pointer font-medium">
                      <input type="checkbox" value={type} checked={modalEventTypes.includes(type)}
                        onChange={e => {
                          setModalEventTypes(s => e.target.checked ? [...s, type] : s.filter(t => t !== type));
                        }}
                        className="mr-2"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              {/* Location filter */}
              <div className="mb-6">
                <strong>Location</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {getUnique(eventList, "location").map(loc => (
                    <label key={loc} className="cursor-pointer font-medium">
                      <input type="checkbox" value={loc} checked={modalLocations.includes(loc)}
                        onChange={e => {
                          setModalLocations(s => e.target.checked ? [...s, loc] : s.filter(l => l !== loc));
                        }}
                        className="mr-2"
                      />
                      {loc}
                    </label>
                  ))}
                </div>
              </div>
              {/* Year filter */}
              <div className="mb-6">
                <strong>Year</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {getUnique(eventList, "year").map(year => (
                    <label key={year} className="cursor-pointer font-medium">
                      <input type="checkbox" value={year} checked={modalYears.includes(year)}
                        onChange={e => {
                          setModalYears(s => e.target.checked ? [...s, year] : s.filter(y => y !== year));
                        }}
                        className="mr-2"
                      />
                      {year}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 mt-7">
                <button
                  onClick={() => setFilterModalOpen(false)}
                  className="flex-1 bg-indigo-900 text-white rounded-xl font-bold text-base px-4 py-2 border-none"
                >
                  Apply
                </button>
                <button
                  onClick={() => {
                    setModalEventTypes([]);
                    setModalLocations([]);
                    setModalYears([]);
                  }}
                  className="flex-1 bg-pink-100 text-purple-800 rounded-xl font-bold text-base px-4 py-2 border-none"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Date picker button */}
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={dateModalOpen}
          onClick={() => setDateModalOpen(true)}
          className="bg-red-900 text-white rounded-lg px-8 py-3 font-semibold text-lg flex items-center gap-2 shadow focus:outline-none relative mb-1"
        >
          <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
            <rect x={3} y={5} width={18} height={16} rx={2} stroke="currentColor" strokeWidth={2} />
            <path d="M16 3v4M8 3v4M3 9h18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
          </svg>
          Select Date
          {selectedDate && (
            <span className="ml-3 text-pink-200 font-normal text-base flex items-center">
              {selectedDate}
              <span
                onClick={e => { e.stopPropagation(); setSelectedDate(""); }}
                className="ml-2 cursor-pointer font-bold text-white"
                title="Clear date"
              >×</span>
            </span>
          )}
        </button>
        {dateModalOpen && (
          <div
            className="fixed inset-0 z-[10001] flex items-center justify-center bg-purple-900/30"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onClick={() => setDateModalOpen(false)}
          >
            <div
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-xl p-8 max-w-xs w-[90vw] relative shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setDateModalOpen(false)}
                aria-label="Close Date Picker"
                className="absolute right-3 top-2 text-2xl font-bold cursor-pointer bg-none border-none text-gray-600"
              >×</button>
              <h3 className="mb-5 font-bold text-base text-pink-900">Select Date</h3>
              <input
                type="date"
                ref={dateInputRef}
                value={selectedDate}
                onChange={e => handleDatePicked(e.target.value)}
                aria-label="Select event date"
                className="text-lg p-3 rounded-md border border-gray-300 font-inherit mb-4 w-full"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Tab filter buttons */}
      <div className="max-w-5xl mx-auto flex gap-8 flex-wrap px-5 mt-5">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setSelectedDate("");
            }}
            className={`cursor-pointer rounded-full font-bold text-base py-2 px-6 border-none ${activeFilter === filter ? "bg-indigo-900 text-white shadow-md" : "bg-white text-gray-900"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Events grid */}
      <main className="max-w-5xl mx-auto mt-8 mb-16 px-5">
        <h2 className="text-indigo-900 font-extrabold text-2xl mb-6">Events</h2>
        {filteredEvents.length === 0 ? (
          <p className="italic text-gray-400">No events found for this filter.</p>
        ) : (
          <>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredEvents
                .slice(0, showAll ? filteredEvents.length : 8)
                .map((ev, idx) => (
                  <EventCard
                    key={`${ev.title}-${idx}`}
                    ev={ev}
                    to={`/events/${slugify(ev.title)}`}
                  />
                ))}
            </section>

            {filteredEvents.length > 8 && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setShowAll((s) => !s)}
                  className="border-none bg-none text-indigo-900 font-bold text-lg cursor-pointer px-4 py-3 rounded-lg shadow-inner"
                >
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

const EventCard = ({ ev, to }) => (
  <Link to={to} className="event-card">
    <div className="rounded-xl shadow-md bg-white flex flex-col overflow-hidden min-h-[260px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <div className="h-[125px] w-full bg-gray-100 flex justify-center items-center overflow-hidden">
        <img
          src={ev.image}
          alt={ev.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <span className="text-purple-600 font-semibold text-sm">{ev.type}</span>
          <span className="text-gray-700 ml-2">{ev.date}</span>
          <h3 className="font-bold text-gray-900 text-lg mt-2">{ev.title}</h3>
          <p className="text-gray-700 text-sm mt-1">{ev.desc}</p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
          <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1">{ev.location}</span>
          <span>{ev.time}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default EventCalendar;
