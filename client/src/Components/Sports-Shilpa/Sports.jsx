import React from "react";
import ReactDOM from "react-dom/client";
import BackToTop from "../../BackToTop";

// Import images
import A1 from "../../assets/Sports-Shilpa/A1.jpeg";
import A2 from "../../assets/Sports-Shilpa/A2.jpeg";
import A3 from "../../assets/Sports-Shilpa/A3.jpeg";
import A4 from "../../assets/Sports-Shilpa/A4.jpeg";
import A5 from "../../assets/Sports-Shilpa/A5.jpeg";
import A6 from "../../assets/Sports-Shilpa/A6.jpeg";

// SportsPage component with all sections and TailwindCSS utility classes
const SportsPage = () => {
  const images = [A1, A2, A3, A4, A5, A6];

  return (
    <div className="bg-gray-100 text-gray-800 font-roboto leading-relaxed min-h-screen pb-24">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center px-6 py-16 rounded-b-[30px] shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6">
          <span className="mr-2">🏅</span> MGM College Sports Summary {" "}
          <span className="ml-2">⚽</span>
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          MGM College supports overall student growth through a strong focus on
          physical education and sports. Large playgrounds, skilled instructors,
          and regular training have helped students become champions over the
          years.
        </p>
      </header>

      {/* Sports Gallery */}
      <section
        className="flex flex-wrap justify-center gap-6 mt-10 px-4"
        aria-label="Photos from MGM College Sports events"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`MGM Sports Event ${index + 1}`}
            className="w-[300px] h-[200px] object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
          />
        ))}
      </section>

      {/* General Rules for Sports Activities */}
      <section className="p-10 mt-12 text-center">
        <h2 className="text-3xl md:text-4xl text-blue-700 font-bold uppercase relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-red-500 after:rounded-md after:mx-auto after:mt-2 mb-6">
          General Rules for Sports Activities
        </h2>
        <p className="text-lg max-w-3xl mx-auto opacity-90 mb-6">
          Participation in sports is a key part of student life and overall
          development. To ensure fair play, safety, and discipline, all students
          involved in sports must follow these guidelines:
        </p>
        <ol className="list-decimal text-left max-w-4xl mx-auto text-lg space-y-4 pl-6">
          <li>
            <span className="font-bold text-red-500">Team Leadership:</span> Captains for each sport will be appointed by
            the College’s Physical Director based on merit, leadership skills, and commitment.
          </li>
          <li>
            <span className="font-bold text-red-500">Selection Criteria:</span> Only students who participate regularly
            in practices and internal competitions are eligible for selection to college
            representative teams.
          </li>
          <li>
            <span className="font-bold text-red-500">Attendance & Participation:</span> Teams that fail to attend scheduled
            practices or disobey instructions may be disqualified from participating in
            tournaments or matches.
          </li>
          <li>
            <span className="font-bold text-red-500">Discipline:</span> Students showing poor conduct, disrespect towards
            staff or teammates, or indiscipline may be removed from teams without prior notice.
          </li>
          <li>
            <span className="font-bold text-red-500">Uniform & Equipment:</span> All players must wear the prescribed uniform
            and bring necessary gear for each game. Proper attire is mandatory during all
            official games, practices, and sports events.
          </li>
          <li>
            <span className="font-bold text-red-500">Code of Conduct:</span> Players are expected to demonstrate discipline,
            follow all instructions from coaches and officials, and maintain sportsmanship
            both on and off the field.
          </li>
          <li>
            <span className="font-bold text-red-500">Care of Equipment:</span> Sports materials and equipment issued by the
            college must be handled responsibly and returned in good condition. Misuse or
            loss may result in penalties.
          </li>
          <li>
            <span className="font-bold text-red-500">Cleanliness & Safety:</span> Keep the grounds and facilities clean. Avoid
            littering, and report any damaged equipment or unsafe conditions immediately.
          </li>
          <li>
            <span className="font-bold text-red-500">Ground Timings:</span> The sports ground is available for practice and
            recreational play from <span className="font-bold">4:00 p.m. to 6:00 p.m. on working days</span>.
            Students must not use the ground during class hours without permission.
          </li>
          <li>
            <span className="font-bold text-red-500">External Participation:</span> Students are not allowed to play for
            outside clubs, organizations, or teams without the prior written approval of the
            Principal.
          </li>
          <li>
            <span className="font-bold text-red-500">Dispute Resolution:</span> In case of any disagreements or disciplinary
            issues, the decision of the Principal will be final and binding.
          </li>
        </ol>
        <p className="text-lg max-w-3xl mx-auto opacity-90 mt-6">
          Following these rules ensures that everyone enjoys a safe, respectful, and competitive
          environment in all college sports activities. Let’s play fair and grow together!
        </p>
      </section>

      {/* Events and Plans Section */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-100 rounded-xl shadow-md p-10 mt-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-blue-700 font-bold uppercase mb-6">
          Exciting Events & Future Endeavors
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          MGM College has been the proud host of countless iconic sports events over the years. One of the standout moments was the prestigious Ranji Cricket Meet in 1978, held on the vast grounds of the A.L.N. Rao playgrounds. The event was not only a testament to the college’s rich sporting legacy but also a celebration of skill, camaraderie, and sportsmanship.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Looking ahead, MGM College is setting its sights on even greater achievements. A state-of-the-art stadium is currently under construction as part of the celebration for Dr. T.M.A. Pai’s centenary. This ambitious project is set to elevate MGM College’s status on the global sports map and will serve as a world-class venue for future sports events, competitions, and training camps.
        </p>
        <p className="text-lg text-gray-600">
          With a focus on innovation and expansion, MGM College aims to host national and international sports championships in the near future, providing students with even more opportunities to shine. The vision is clear: to become a hub of excellence for sports and education, fostering the next generation of champions.
        </p>
      </section>

      {/* Sports Facilities Section */}
      <section className="bg-white rounded-xl shadow-md p-10 mt-12 max-w-5xl mx-auto text-center hover:-translate-y-2 transition-transform duration-300">
        <h2 className="text-3xl md:text-4xl text-blue-700 font-bold uppercase mb-6">
          Sports Facilities
        </h2>
        <p className="text-lg text-gray-700">
          The Physical Education Department has a variety of sports facilities for students:
        </p>
        <ul className="text-lg text-gray-700 space-y-3 mt-4">
          <li>400m running track</li>
          <li>Football, Basketball, and Volleyball courts</li>
          <li>Cricket pitch</li>
          <li>Indoor Sports Complex (worth ~Rs. 2 crores, funded by UGC)</li>
          <li>3 Badminton courts (can also be used for Volleyball)</li>
          <li>2 gyms (separate for boys and girls)</li>
          <li>3 Table Tennis tables and Chess boards</li>
        </ul>
        <p className="mt-6 text-lg text-gray-600">
          Yoga, Pranayama, and regular fitness checks help keep students healthy and disciplined.
        </p>
      </section>

      {/* Achievements Section */}
      <section className="bg-sky-50 rounded-xl shadow-md p-10 mt-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-blue-700 font-bold uppercase mb-6">
          Achievements
        </h2>
        <ul className="list-disc text-left mx-auto pl-6 text-lg text-gray-700 space-y-3">
          <li>Mr. M. G. S. Shetty – Asian Games silver medalist (Bangkok)</li>
          <li>K. Gopal & Gopal Kidiyoor – National Javelin Champs</li>
          <li>Mr. B. Madhava Shetty – Mr. Mysore titleholder</li>
          <li>Miss Jacqueline Priyadarshini – Sprint Queen (1997-98)</li>
          <li>Upcoming Cricket Stadium – MGM's legacy in progress</li>
        </ul>
      </section>

      {/* Fixed Footer with Back to Top link */}
      {/* <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center py-4 shadow-lg z-10">
        <a
          href="#top"
          className="text-lg hover:underline transition-colors"
          aria-label="Back to top link"
        >
          🔝 Back to Top
        </a>
      </footer> */}
      <BackToTop />
    </div>
  );
};

// Mount the SportsPage directly
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SportsPage />
  </React.StrictMode>
);

export default SportsPage;
