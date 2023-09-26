import React from "react";
import Otherprojecttitle from "./Otherprojecttitle/Otherprojecttitle";
import img1 from "../../../assets/profiles/user.jpg";
import img2 from "../../../assets/profiles/user-1.jpg";
import img3 from "../../../assets/profiles/user-2.jpg";
import img4 from "../../../assets/profiles/user-3.jpg";
import img5 from "../../../assets/profiles/user-4.jpg";
import img6 from "../../../assets/profiles/user-5.jpg";
import "./otherproject.css";

function Otherproject() {
  const profiles = [img1, img2, img3, img4, img5, img6];

  const subtitles = [
    "Landing page",
    "Vehicle",
    "Art & Culture",
    "Login/Logout",
    "Sustainability",
    "Innovation",
  ];

  return (
    <div className="otherproject-container">
      <Otherprojecttitle
        title={"Mercedes project"}
        profiles={profiles}
        subtitles={subtitles}
      />
      <Otherprojecttitle title={"Amazon project"} />
      <Otherprojecttitle title={"Tesla project"} />
      <Otherprojecttitle title={"Google project"} />
    </div>
  );
}

export default Otherproject;
