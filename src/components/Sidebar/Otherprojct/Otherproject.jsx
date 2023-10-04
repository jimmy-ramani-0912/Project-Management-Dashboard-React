import React from "react";
import Otherprojecttitle from "./Otherprojecttitle/Otherprojecttitle";
import img1 from "../../../assets/profiles/user.jpg";
import img2 from "../../../assets/profiles/user-1.jpg";
import img3 from "../../../assets/profiles/user-2.jpg";
import img4 from "../../../assets/profiles/user-3.jpg";
import img5 from "../../../assets/profiles/user-4.jpg";
import img6 from "../../../assets/profiles/user-5.jpg";

function Otherproject() {
  const projects = [
    {
      title: "Mercedes project",
      subtitles: [
        "Landing page",
        "Vehicle",
        "Art & Culture",
        "Login/Logout",
        "Sustainability",
        "Innovation",
      ],
      profiles: [img1, img2, img3, img4, img5, img6],
    },
    {
      title: "Amazon project",
      subtitles: [
        "Subtitle 1",
        "Subtitle 2",
        "Subtitle 3",
        "Subtitle 4",
        "Subtitle 5",
        "Subtitle 6",
      ],
      profiles: [img1, img2, img3, img4, img5, img6],
    },
    {
      title: "Tesla project",
      subtitles: [
        "Subtitle 7",
        "Subtitle 8",
        "Subtitle 9",
        "Subtitle 10",
        "Subtitle 11",
        "Subtitle 12",
      ],
      profiles: [img1, img2, img3, img4, img5, img6],
    },
    {
      title: "Google project",
      subtitles: [
        "Subtitle 13",
        "Subtitle 14",
        "Subtitle 15",
        "Subtitle 16",
        "Subtitle 17",
        "Subtitle 18",
      ],
      profiles: [img1, img2, img3, img4, img5, img6],
    },
  ];

  return (
    <div className="otherproject-container" style={{ marginBottom: "auto" }}>
      {projects.map((project, index) => (
        <Otherprojecttitle
          key={index}
          title={project.title}
          profiles={project.profiles}
          subtitles={project.subtitles}
        />
      ))}
    </div>
  );
}

export default Otherproject;
