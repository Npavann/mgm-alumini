import React from 'react';

// import banner from './banner.jpg'; // Top image
// import hostel1 from './hostel1.jpg';
// import hostel2 from './hostel2.jpg';
// import hostel3 from './hostel3.jpg';

const banner = "https://placehold.co/1200x400/222/fff.png?text=Annapoorna+Canteen";

const Canteen = () => {
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
            Annapoorna Canteen
          </h1>
        </div>
      </div>

      {/* Hostel Info Content */}
      <div className="max-w-5xl mx-auto p-8 bg-[#d0eeff78] rounded-lg shadow-2xl shadow-gray-900 mt-8">
        <p className="text-gray-700 mb-6">
          The Annapoorna Canteen of MGM College was inaugurated on <b>23rd March, 1990</b> by <i>Dr. M. I. Savadatti, Vice-Chancellor of Mangalore University.</i> Since then, it has been serving as an important support facility for students and staff, offering affordable and hygienic food within the campus.
        </p>

        {/* Facilities */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Facilities</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            The canteen provides wholesome mid-day meals, snacks, and beverages for day scholars, hostellers, faculty, and staff. With a seating capacity of over 400, it ensures that large numbers of students can be served comfortably. The food is served on a subsidized basis, making it economical and accessible to everyone.
          </p>
        </section>

      {/* Role in Campus Life */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Role in Campus Life</h2>
          <p className="text-gray-700 leading-relaxed">
            The canteen is more than just a dining space—it is a hub of interaction and community life. It plays a vital role during college events, as the availability of on-campus meals makes organizing seminars, workshops, and cultural programs easier and more convenient.
          </p>
        </section>

        {/* Healthy and Hygienic Dining */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Healthy and Hygienic Dining</h2>
          <p className="text-gray-700 leading-relaxed">
            Annapoorna maintains high standards of cleanliness and hygiene, ensuring that students receive nutritious meals in a safe environment. Both vegetarian and light snack options are available to cater to different preferences. The canteen staff work under the guidance of the management to provide timely and efficient service throughout the day.
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

export default Canteen;