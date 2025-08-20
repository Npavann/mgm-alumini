import React from 'react';

// import banner from './banner.jpg'; // Top image
// import hostel1 from './hostel1.jpg';
// import hostel2 from './hostel2.jpg';
// import hostel3 from './hostel3.jpg';

const banner = "https://placehold.co/1200x400/222/fff.png?text=Parking+Places ";

const ParkingInfo = () => {
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
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src={banner}
          alt="Hostel Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-start pl-12 pt-40"> {/*bg banner image*/}
          <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
            Parking Places
          </h1>
        </div>
      </div>

      {/* Hostel Info Content */}
      <div className="max-w-5xl mx-auto p-8 bg-[#d0eeff78] rounded-lg shadow-2xl shadow-gray-900 mt-8">
        <p className="text-gray-700 mb-6">
          MGM College provides well-organized vehicle parking facilities for both students and staff within the campus. Designated parking areas ensure smooth traffic flow and easy access to the academic blocks, hostels, and other facilities.
        </p>

        {/* Facilities */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Student Parking</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
           Separate parking slots are allotted for students, accommodating two-wheelers and bicycles. These areas are conveniently located near the main entrance and academic buildings for ease of access. Students are required to display valid parking permits and follow the parking guidelines set by the college to maintain order and safety.
          </p>
        </section>

      {/* Safety and Security */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Staff Parking</h2>
          <p className="text-gray-700 leading-relaxed">
            Exclusive parking spaces are reserved for lecturers and staff members, allowing them quick and secure access to the campus. Staff parking areas are located closer to faculty offices and administrative sections, ensuring convenience during working hours.
          </p>
        </section>

        {/* Mess */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Safety and Regulations</h2>
          <p className="text-gray-700 leading-relaxed">
            All parking zones are monitored by security personnel and covered under CCTV surveillance. Entry and exit points are regulated to avoid congestion, and only authorized vehicles are permitted within the campus. The college encourages disciplined parking habits to ensure maximum utilization of space and safety for all.
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

export default ParkingInfo;