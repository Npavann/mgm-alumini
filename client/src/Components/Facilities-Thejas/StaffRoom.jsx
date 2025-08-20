import React from 'react';

// import banner from './banner.jpg'; // Top image
// import hostel1 from './hostel1.jpg';
// import hostel2 from './hostel2.jpg';
// import hostel3 from './hostel3.jpg';

const banner = "https://placehold.co/1200x400/222/fff.png?text=StaffRoom ";

const StaffRoom = () => {
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
            StaffRoom
          </h1>
        </div>
      </div>

      {/* Hostel Info Content */}
      <div className="max-w-5xl mx-auto p-8 bg-[#d0eeff78] rounded-lg shadow-2xl shadow-gray-900 mt-8">
        <p className="text-gray-700 mb-6">
          All the departments of MGM College have a separate staff room for their faculty members, in addition to a common staff room provided for general use.
        </p>

        {/* Department Staff Rooms */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Department Staff Rooms</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            Each department staff room is equipped with basic furniture and storage facilities, enabling teachers to prepare lessons, evaluate assignments, and meet students for academic discussions. These spaces also provide privacy for departmental work and staff interactions.
          </p>
        </section>

      {/* Common Staff Room */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Common Staff Room</h2>
          <p className="text-gray-700 leading-relaxed">
            The common staff room serves as a shared space for faculty across departments. It encourages interaction, collaboration, and exchange of ideas among teachers. It is furnished with seating arrangements, tables, and notice boards for departmental and college-level communication.
          </p>
        </section>

        {/* Role in Campus Life */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Role in Campus Life</h2>
          <p className="text-gray-700 leading-relaxed">
            The staff rooms provide faculty members with a comfortable environment for academic preparation, discussions, and short breaks in between classes, ensuring the smooth functioning of teaching and mentoring activities in the college.
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

export default StaffRoom;