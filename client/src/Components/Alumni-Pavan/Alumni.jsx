import React, { useState } from "react";

const officeBearers = [
  {
    office: "President",
    name: "Prof. Kokkarne Surendranath Shetty",
    mob: "9964498869",
    email: "kokkarneshetty@gmail.com",
  },
  {
    office: "Secretary",
    name: "Dr. M Vishwanath Pai",
    mob: "9008515307",
    email: "vish_pai@yahoo.com",
  },
  {
    office: "Treasurer",
    name: "Mrs. Deepali Kamath",
    mob: "9449388877",
    email: "kamath_deepali@yahoo.com",
  },
];

export default function Alumni() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Thank you for registering as an alumni!");
      } else {
        alert("Error during registration. Please try again.");
      }
      setShowForm(false);
      setFormData({ name: "", email: "", phone: "", batch: "" });
    } catch (err) {
      alert("Network error.");
    }
  };

  return (
    <div className="font-sans bg-gray-100 max-w-4xl mx-auto p-6">
      {/* Header */}
      <header className="flex justify-end gap-3 mb-5">
        <button
          className="bg-sky-600 hover:bg-sky-800 text-white px-4 py-2 rounded text-sm transition"
          onClick={() => setShowForm(true)}
        >
          Click to Register for MGM College Alumni Form
        </button>
        <a
          href="/membership-form.pdf"
          download
          className="bg-sky-600 hover:bg-sky-800 text-white px-4 py-2 rounded text-sm transition"
        >
          Download Alumni Membership Form
        </a>
      </header>

      {/* Modal form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h3 className="text-sky-600 text-lg font-semibold mb-4">
              Alumni Registration
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-sky-200 px-3 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-sky-200 px-3 py-2 rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-sky-200 px-3 py-2 rounded"
              />
              <input
                type="text"
                name="batch"
                placeholder="Batch (Year)"
                value={formData.batch}
                onChange={handleChange}
                required
                className="w-full border border-sky-200 px-3 py-2 rounded"
              />
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-sky-600 text-white px-3 py-1.5 rounded hover:bg-sky-700"
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 px-3 py-1.5 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sections */}
      <section className="bg-white mb-6 rounded-lg shadow p-6">
        <h2 className="bg-sky-600 text-white -mx-6 -mt-6 mb-4 px-5 py-2 rounded-t-lg text-lg font-semibold">
          Objective
        </h2>
        <div className="text-gray-700 space-y-3">
          <p>
            Our Main objective is to give an opportunity to the old students of
            the College to serve and work for the betterment of their Alma Mater
            in an effective manner.
          </p>
          <p>
            Our objective is also to create strong and vibrant symbiotic alumni
            network that connects departments, current students, past students
            and our society at large. We believe that we are being steadily
            successful in meeting this objective.
          </p>
        </div>
      </section>

      <section className="bg-white mb-6 rounded-lg shadow p-6">
        <h2 className="bg-sky-600 text-white -mx-6 -mt-6 mb-4 px-5 py-2 rounded-t-lg text-lg font-semibold">
          An appeal to all M.G.M. alumni
        </h2>
        <div className="text-gray-700 space-y-3">
          <p>
            Mahatma Gandhi Memorial College, one of the premier Colleges of Coastal Karnataka...
          </p>
          <p>
            Whenever we decided to connect with the alumni students...
          </p>
          <p>
            Every year a convention of the alumni is held. The alumni who attend this get together...
          </p>
          <p>
            To strengthen the Forum an attempt is being made to renew contact with our Alumni...
          </p>
        </div>
      </section>

      <section className="bg-white mb-6 rounded-lg shadow p-6">
        <div className="text-gray-700 space-y-2">
          <p>
            Awaiting a favourable response.
            <br />
            Thanking you,
          </p>
          <p>
            Yours Sincerely,
            <br />
            President and Secretary
            <br />
            MGM College Alumni Forum.
          </p>
        </div>
      </section>

      {/* Office Bearers Table */}
      <section className="bg-white mb-6 rounded-lg shadow p-6">
        <h2 className="bg-sky-600 text-white -mx-6 -mt-6 mb-4 px-5 py-2 rounded-t-lg text-lg font-semibold">
          Office bearers
        </h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-sky-300 text-white">
              <th className="p-2 text-left">Office</th>
              <th className="p-2 text-left">Holders</th>
              <th className="p-2 text-left">Contact</th>
            </tr>
          </thead>
          <tbody>
            {officeBearers.map((bearer) => (
              <tr key={bearer.office} className="border-t">
                <td className="p-2">{bearer.office}</td>
                <td className="p-2">{bearer.name}</td>
                <td className="p-2">
                  Mob: {bearer.mob}
                  <br />
                  Email:{" "}
                  <a
                    href={`mailto:${bearer.email}`}
                    className="text-sky-600 hover:underline"
                  >
                    {bearer.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}