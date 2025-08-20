import React from 'react';

// import banner from './banner.jpg'; // Top image
// import hostel1 from './hostel1.jpg';
// import hostel2 from './hostel2.jpg';
// import hostel3 from './hostel3.jpg';

const banner = "https://placehold.co/1200x400/222/fff.png?text=Hostel+For+Girls ";

const HostelInfo = () => {
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
          <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-[1px_1px_16px_black]">
            Hostel For Girls
          </h1>
        </div>
      </div>

      {/* Hostel Info Content */}
      <div className="max-w-5xl mx-auto p-8 bg-[#d0eeff78] rounded-lg shadow-2xl shadow-gray-900 mt-8">
        <p className="text-gray-700 mb-6">
          Hostel facilities are provided for students coming from far-off places, offering them a safe and supportive living environment. The <b>Sri Vadiraja Vidyarthini Nilaya,</b> established in 1970, serves as the Ladies Hostel of MGM College. Known for its discipline and self-governance, the hostel has earned a strong reputation among students and parents. Living here is regarded as a mark of trust and pride for the residents.
        </p>

        {/* Facilities */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Facilities</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            The hostel is equipped with well-ventilated rooms furnished with essential items such as a cot, cupboard, study table, and chair. Common amenities include <b>Priyadarshini Hall </b>(added in 1973) for cultural events and gatherings, a reading room, recreation hall, and TV lounge. Residents also have access to clean drinking water, solar water heaters for hot water supply, and laundry facilities. WiFi is available throughout the premises to support academic needs.
          </p>
        </section>

      {/* Safety and Security */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Safety and Security</h2>
          <p className="text-gray-700 leading-relaxed">
            The hostel maintains 24x7 security with a dedicated warden to ensure the safety and well-being of all residents. The campus is equipped with CCTV surveillance, and visitors are allowed only during specified hours. A set of rules and regulations promotes a disciplined environment conducive to study and personal growth.
          </p>
        </section>

        {/* Mess */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Mess</h2>
          <p className="text-gray-700 leading-relaxed">
            A hygienic vegetarian mess operates on a cost-sharing basis, providing nutritious meals to the residents. Special non-vegetarian dishes can be arranged occasionally during festivals or celebrations. Residents also have access to purified drinking water and canteen facilities for light snacks and beverages.
          </p>
        </section>

        {/* Recreation and Community Life */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Recreation and Community Life</h2>
          <p className="text-gray-700 leading-relaxed">
            The hostel encourages a vibrant community life with spaces for indoor and outdoor games, cultural activities, and group study sessions. Various celebrations and hostel events help students bond, creating a sense of belonging away from home. The warden, <b>Ms. Jayalaxmi M. Rao, B.Com.,</b> personally oversees the smooth functioning of the hostel and addresses the needs of the boarders.
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

export default HostelInfo;