import React from 'react';

// import banner from './banner.jpg'; // Top image
// import hostel1 from './hostel1.jpg';
// import hostel2 from './hostel2.jpg';
// import hostel3 from './hostel3.jpg';

const banner = "https://placehold.co/1200x400/222/fff.png?text=Co-operative+Store ";

const CoOpStore = () => {
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
            MGM Students’ Co-operative Store
          </h1>
        </div>
      </div>

      {/* Hostel Info Content */}
      <div className="max-w-5xl mx-auto p-8 bg-[#d0eeff78] rounded-lg shadow-2xl shadow-gray-900 mt-8">
        <p className="text-gray-700 mb-6">
          The <i>MGM Students’ Co-operative Store</i> was registered as a Co-operative Society in <b>June 1952</b> and has since been an integral part of campus life. The store was established with the aim of providing essential academic materials to students at competitive rates, making education more affordable and accessible.
        </p>

        {/* Membership */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Membership</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            All students of the college are considered Associative Members or Shareholders of the store, which makes it a student-owned initiative. By being a part of this co-operative system, students contribute to its smooth functioning and benefit directly from its services.
          </p>
        </section>

      {/* Facilities and Services */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Facilities and Services</h2>
          <p className="text-gray-700 leading-relaxed">
            The store supplies all the textbooks, stationery, and academic essentials required by students throughout the year. It also keeps other necessary articles for daily student use. Students are encouraged to make their purchases from the store to ensure quality products at reasonable prices.
          </p>
        </section>

        {/* Social Commitment */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Social Commitment</h2>
          <p className="text-gray-700 leading-relaxed">
            One of the unique features of the Co-operative Store is its social responsibility. The profits generated are not retained for business but are distributed as scholarships to deserving and needy students, making it a noble initiative that supports education and inclusivity.
          </p>
        </section>

        {/* Management */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Management</h2>
          <p className="text-gray-700 leading-relaxed">
            The store is efficiently managed under the supervision of <b>Mr. Anil Kumar B., M.Com., Lecturer, Honourary Secretary</b> and <b>Mr. B. Udaya, Sales Clerk,</b> who ensure the smooth day-to-day functioning of the store.
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

export default CoOpStore;