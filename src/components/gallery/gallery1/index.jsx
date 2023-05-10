import React from "react";
import "./style.css";

const Items = () => {
  return (
    <div className="gallery-items-container">
      <div className="gallery-item">
        <div className="gallery-item-block">
          <div className="gallery-item-photo"></div>
          <p className="gallery-item-name">SCREENSHOT #1</p>
        </div>
        <p className="gallery-item-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          libero laborum culpa, pariatur maxime consectetur.
        </p>
      </div>
      <div className="gallery-item">
        <div className="gallery-item-block">
          <div className="gallery-item-photo"></div>
          <p className="gallery-item-name">SCREENSHOT #2</p>
        </div>
        <p className="gallery-item-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          libero laborum culpa, pariatur maxime consectetur.
        </p>
      </div>
      <div className="gallery-item">
        <div className="gallery-item-block">
          <div className="gallery-item-photo"></div>
          <p className="gallery-item-name">SCREENSHOT #3</p>
        </div>
        <p className="gallery-item-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          libero laborum culpa, pariatur maxime consectetur.
        </p>
      </div>
      <div className="gallery-item">
        <div className="gallery-item-block">
          <div className="gallery-item-photo"></div>
          <p className="gallery-item-name">SCREENSHOT #4</p>
        </div>
        <p className="gallery-item-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          libero laborum culpa, pariatur maxime consectetur.
        </p>
      </div>
    </div>
  );
};

export default Items;

// import React, { useState } from "react";
// import "./style.css";
// import { AiOutlineYoutube } from "react-icons/ai";
// import Video from "./../../Video/index";

// const Items = () => {
//   const [videoUrl, setVideoUrl] = useState("");

//   const handleItemClick = (url) => {
//     setVideoUrl(url);
//   };

//   return (
//     <>
//       <div className="gallery-items-container">
//         <div
//           className="gallery-item"
//           onClick={() =>
//             handleItemClick("https://www.youtube.com/watch?v=VIDEO_1_ID")
//           }
//         >
//           <div className="gallery-item-block">
//             <div className="gallery-item-photo"></div>
//             <p className="gallery-item-name">SCREENSHOT #1</p>
//           </div>
//           <p className="gallery-item-description">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
//             libero laborum culpa, pariatur maxime consectetur.
//           </p>
//         </div>
//         <div
//           className="gallery-item"
//           onClick={() =>
//             handleItemClick("https://www.youtube.com/watch?v=VIDEO_2_ID")
//           }
//         >
//           <div className="gallery-item-block">
//             <div className="gallery-item-photo"></div>
//             <p className="gallery-item-name">SCREENSHOT #2</p>
//           </div>
//           <p className="gallery-item-description">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
//             libero laborum culpa, pariatur maxime consectetur.
//           </p>
//         </div>
//         <div
//           className="gallery-item"
//           onClick={() =>
//             handleItemClick("https://www.youtube.com/watch?v=VIDEO_3_ID")
//           }
//         >
//           <div className="gallery-item-block">
//             <div className="gallery-item-photo"></div>
//             <p className="gallery-item-name">SCREENSHOT #3</p>
//           </div>
//           <p className="gallery-item-description">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
//             libero laborum culpa, pariatur maxime consectetur.
//           </p>
//         </div>
//         <div
//           className="gallery-item"
//           onClick={() =>
//             handleItemClick("https://www.youtube.com/watch?v=VIDEO_4_ID")
//           }
//         >
//           <div className="gallery-item-block">
//             <div className="gallery-item-photo"></div>
//             <p className="gallery-item-name">SCREENSHOT #4</p>
//           </div>
//           <p className="gallery-item-description">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
//             libero laborum culpa, pariatur maxime consectetur.
//           </p>
//         </div>
//       </div>
//       <Video videoUrl={videoUrl} />
//     </>
//   );
// };

// export default Items;

// import React, { useState } from "react";
// import "./style.css";
// import Video from "./../../Video/index";

// const Items = () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(null);

//   const handleItemClick = (index) => {
//     setActiveItemIndex(index);
//   };

//   return (
//     <>
//       <div className="gallery-items-container">
//         <div
//           className={`gallery-item ${activeItemIndex === 0 ? "active" : ""}`}
//           onClick={() => handleItemClick(0)}
//         >
//           <div className="gallery-item-block">
//             <div className="gallery-item-photo"></div>
//             <p className="gallery-item-name">SCREENSHOT #1</p>
//           </div>
//           <p className="gallery-item-description">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
//             libero laborum culpa, pariatur maxime consectetur.
//           </p>
//         </div>
//         <div
//           className={`gallery-item ${activeItemIndex === 1 ? "active" : ""}`}
//           onClick={() => handleItemClick(1)}
//         >
//           <div className="gallery-item-block">
//             <div className="gallery-item-photo"></div>
//             <p className="gallery-item-name">SCREENSHOT #2</p>
//           </div>
//           <p className="gallery-item-description">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
//             libero laborum culpa, pariatur maxime consectetur.
//           </p>
//         </div>
//         <div
//           className={`gallery-item ${activeItemIndex === 2 ? "active" : ""}`}
//           onClick={() => handleItemClick(2)}
//         >
//           <div className="gallery-item-block">
//             <div className="gallery-item-photo"></div>
//             <p className="gallery-item-name">SCREENSHOT #3</p>
//           </div>
//           <p className="gallery-item-description">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
//             libero laborum culpa, pariatur maxime consectetur.
//           </p>
//         </div>
//         <div
//           className={`gallery-item ${activeItemIndex === 3 ? "active" : ""}`}
//           onClick={() => handleItemClick(3)}
//         >
//           <div className="gallery-item-block">
//             <div className="gallery-item-photo"></div>
//             <p className="gallery-item-name">SCREENSHOT #4</p>
//           </div>
//           <p className="gallery-item-description">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
//             libero laborum culpa, pariatur maxime consectetur.
//           </p>
//         </div>
//         {activeItemIndex !== null && (
//           <Video activeItemIndex={activeItemIndex} />
//         )}
//       </div>
//     </>
//   );
// };

// export default Items;
