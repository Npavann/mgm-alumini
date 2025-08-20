import React from "react";

function HeaderBar() {
  return (
    <div className="bg-white px-6 pt-5 pb-1 text-left shadow">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-normal mb-1">MGM: What is New?</h1>
          <div className="text-gray-600 text-base">
            This blog throws light on various activities conducted at MGM College, Udupi
            and maintained by MGM College...
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;