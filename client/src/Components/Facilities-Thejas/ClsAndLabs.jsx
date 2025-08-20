import React from 'react';

// import banner from './banner.jpg'; // Top image
// import hostel1 from './hostel1.jpg';
// import hostel2 from './hostel2.jpg';
// import hostel3 from './hostel3.jpg';

const banner = "https://placehold.co/1200x400/222/fff.png?text=Classrooms+and+Laboratories ";

const ClsAndLabs = () => {
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
            Classrooms and Laboratories
          </h1>
        </div>
      </div>

      {/* Hostel Info Content */}
      <div className="max-w-5xl mx-auto p-8 bg-[#d0eeff78] rounded-lg shadow-2xl shadow-gray-900 mt-8">
        <p className="text-gray-700 mb-6">
          MGM College provides a strong academic environment with 56 well-ventilated and spacious classrooms designed to support effective teaching and learning. Continuous efforts are being made to modernize classroom facilities, including the replacement of traditional blackboards with more effective green boards to enhance the teaching experience.
        </p>

        {/* Laboratories */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Laboratories</h2>
          <p className="list-disc list-inside text-gray-700 space-y-2">
            Both PU and Degree courses are supported by well-equipped laboratories that allow students to gain hands-on experience in their subjects. The laboratories are regularly upgraded with modern equipment and apparatus to ensure that practical learning keeps pace with academic requirements. These facilities help students bridge the gap between theoretical knowledge and real-world applications.
          </p>
        </section>

      {/* Audio-Visual Hall */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Audio-Visual Hall</h2>
          <p className="text-gray-700 leading-relaxed">
            A state-of-the-art Audio Visual Hall provides a dynamic platform for interactive teaching, seminars, guest lectures, and presentations. Equipped with modern sound and projection systems, it enhances the learning process by encouraging the use of multimedia in classroom teaching.
          </p>
        </section>

        {/* Learning Environment */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Learning Environment</h2>
          <p className="text-gray-700 leading-relaxed">
            Together, the classrooms, laboratories, and AV facilities create a stimulating academic atmosphere that encourages curiosity, experimentation, and participatory learning, making education at MGM College both engaging and effective.
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

export default ClsAndLabs;