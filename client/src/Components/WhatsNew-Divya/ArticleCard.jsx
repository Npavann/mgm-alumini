import React from "react";
import college from "../../assets/WhatsNew-Divya/college.jpg";
import event1 from "../../assets/WhatsNew-Divya/butterfly1.jpg";
import event2 from "../../assets/WhatsNew-Divya/butterfly2.jpg";
import event3 from "../../assets/WhatsNew-Divya/butterfly3.jpg";
import event4 from "../../assets/WhatsNew-Divya/butterfly4.jpg";
import event5 from "../../assets/WhatsNew-Divya/butterfly5.jpg";

function ArticleCard() {
  return (
    <div>
      {/* College Image at the top */}
      
  <img
  src={college}
  alt="MGM College Udupi"
  className="w-screen h-64 object-cover object-center mb-6"
/>



      <div className="flex items-start bg-[#d0eeff78] mx-auto my-9 p-8 max-w-2xl rounded-lg shadow-md relative min-h-[400px]">
        
        {/* Date flag */}
        <div className="absolute left-3 top-7 w-10 h-14 bg-blue-700 text-white rounded-t-md rounded-b-lg flex flex-col items-center font-bold shadow text-xs">
          <span className="text-lg">5</span>
          <span className="uppercase tracking-wide text-[11px]">DEC</span>
        </div>

        {/* Article Content */}
        <div className="flex-1 ml-12">
          <h2 className="text-center text-xl font-semibold mb-4">
            Inauguration of Savita Sastri Butterfly Park, MGM College, Udupi
          </h2>
          <p className="text-gray-800 leading-relaxed text-[17px]">
            MGM College in Udupi is not just an academic institution—it’s becoming a haven
            for biodiversity with its very own Savita Sastri Butterfly Park. Nestled
            within the campus, this lush green park is dedicated to the conservation and
            celebration of butterflies, offering a tranquil escape and invaluable learning
            space for students and visitors alike. <br /><br />
            Spanning 15 cents of land, the butterfly park is teeming with more than 32
            species of butterflies from families such as Papilionidae, Nymphalidae,
            Pieridae, Lycaenidae, and Hesperiidae...
          </p>

          {/* Images */}
          <div className="mt-6 space-y-6">
            <img src={event1} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
            <img src={event2} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
            <img src={event3} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
            <img src={event4} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
            <img src={event5} alt="butterfly park" className="w-full max-w-[620px] mx-auto rounded-xl shadow-md" />
          </div>

          {/* Post Meta */}
          <div className="text-gray-600 mt-6 border-t border-gray-200 pt-3 text-sm">
            Posted 5th December 2023 by{" "}
            <span className="font-medium text-blue-700">MGM College, Udupi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;