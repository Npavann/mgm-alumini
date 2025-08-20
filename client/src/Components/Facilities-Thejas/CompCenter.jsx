import React from 'react';

// import banner from './banner.jpg'; // Top image
// import hostel1 from './hostel1.jpg';
// import hostel2 from './hostel2.jpg';
// import hostel3 from './hostel3.jpg';

const banner = "https://placehold.co/1200x400/222/fff.png?text=Computer+Centre ";

const ComputerCenter = () => {
  // const hostelCards = [
  //   // { img: boys1, label: "Boys Hostel" },
  //   { img: hostel1 },
  //   { img: hostel2 },
  //   { img: hostel3 },
  // ];

const hostelCards = [
  { img: "https://placehold.co/400x300/EFEFEF/222?text=image+1" },
  { img: "https://placehold.co/400x300/DDEEFF/222?text=image+2" },
  { img: "https://placehold.co/400x300/CCDDEE/222?text=image+3" },
];

  return (
    <div className='pt-12 pb-20' style={{ background: "oklch(0.98 0 0)" }}>
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden"> {/*bg banner image*/}
        <img
          src={banner}
          alt="Hostel Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-start pl-12 pt-40"> 
          <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
            Computer Centre
          </h1>
        </div>
      </div>

      {/* Hostel Info Content */}
      <div className="max-w-5xl mx-auto p-8 bg-[#d0eeff78] rounded-lg shadow-2xl shadow-gray-900 mt-8">
        <p className="text-gray-700 mb-6">
          The <b>Computer Centre</b> of MGM College was inaugurated by <i>Sri T. Ramesh U. Pai</i> and has since grown into a vital hub for digital learning and research. It plays a key role in equipping students with essential computer skills and supporting academic programs across disciplines.
        </p>

        {/* Facilities */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Facilities</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            The centre houses a state-of-the-art computer laboratory with more than 250 computers connected through a reliable network. Along with high-speed internet access, the lab is equipped with printers, scanners, servers, laptops, and projectors to facilitate both teaching and independent learning.
          </p>
        </section>

      {/* Academic Support */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Academic Support</h2>
          <p className="text-gray-700 leading-relaxed">
            The Computer Centre provides resources for practical sessions, project work, online learning, and workshops. It also supports faculty in integrating technology into their teaching, ensuring that students gain exposure to the latest tools and applications in their respective fields.
          </p>
        </section>

        {/* Learning Environment */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Learning Environment</h2>
          <p className="text-gray-700 leading-relaxed">
            With its modern infrastructure, the Computer Centre fosters an environment where students can develop technical proficiency, enhance their digital literacy, and prepare for careers in a technology-driven world.
          </p>
        </section>
        

      {/* Bottom Hostel Image Cards */}
      <div className="max-w-5xl mx-auto mt-12 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {hostelCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-200"
          >
            <img
              src={card.img}
              // alt={card.label}
              className="w-full h-60 object-cover"
            />
            {/* <div className="py-3 text-center border-t">
              <span className="font-medium text-lg text-gray-800">{card.label}</span>
            </div> */}
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default ComputerCenter;