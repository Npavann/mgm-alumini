import React from 'react';

// import banner from './banner.jpg'; // Top image
// import hostel1 from './hostel1.jpg';
// import hostel2 from './hostel2.jpg';
// import hostel3 from './hostel3.jpg';

const banner = "https://placehold.co/1200x400/222/fff.png?text=Library ";

const Library = () => {
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
            Library
          </h1>
        </div>
      </div>

      {/* Hostel Info Content */}
      <div className="max-w-5xl mx-auto p-8 bg-[#d0eeff78] rounded-lg shadow-2xl shadow-gray-900 mt-8">
        <p className="text-gray-700 mb-6">
          The <b>Library of MGM College</b> is one of the key learning resources on campus. Spanning an area of about <b>13,037 sq. ft. (carpet area),</b> it is housed in a separate and spacious building designed to provide a peaceful environment for study and research.
        </p>

      {/* Collection */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Collection</h2>
          <p className="text-gray-700 leading-relaxed">
            The library maintains a rich collection of textbooks, reference materials, journals, periodicals, and newspapers catering to both PU and Degree courses. The collection is updated from time to time to meet the academic needs of students and faculty.
          </p>
        </section>

        {/* Facilities */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Facilities</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            The library offers well-furnished reading halls with ample seating capacity for students and staff. Separate sections are maintained for textbooks, reference books, and periodicals, making it convenient for students to locate resources. The calm and studious atmosphere of the library encourages effective learning and concentration.
          </p>
        </section>

        {/* Role in Academics */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Role in Academics</h2>
          <p className="text-gray-700 leading-relaxed">
            Serving as the academic hub of the college, the library supports students in their curriculum, assignments, project work, and exam preparation. With its extensive collection and quiet setting, it continues to promote reading habits, self-study, and research-oriented learning.
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

export default Library;