import React from "react";

const navLinks = [
  { label: "Classic", url: "http://mgmcollegeudupi.blogspot.com/?view=classic" },
  { label: "Flipcard", url: "http://mgmcollegeudupi.blogspot.com/?view=flipcard" },
  { label: "Magazine", url: "http://mgmcollegeudupi.blogspot.com/2023/12/study-tour-organised-by-deptof-english.html?view=magazine" },
  { label: "Mosaic", url: "http://mgmcollegeudupi.blogspot.com/2023/12/study-tour-organised-by-deptof-english.html?view=mosaic" },
  { label: "Sidebar", url: "http://mgmcollegeudupi.blogspot.com/2023/12/study-tour-organised-by-deptof-english.html?view=sidebar" },
  { label: "Snapshot", url: "http://mgmcollegeudupi.blogspot.com/?view=snapshot" },
  { label: "Timeslide", url: "http://mgmcollegeudupi.blogspot.com/?view=timeslide" }
];

function NavBar() {
  return (
    <div className="bg-[#232425] text-gray-300 px-6 py-2">
      {navLinks.map((link) => (
        <button
          key={link.label}
          onClick={() => window.open(link.url, "_blank")}
          className="bg-[#37393a] text-white px-5 py-2 mr-3 rounded-md text-base transition hover:bg-blue-500 hover:text-white"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}

export default NavBar;