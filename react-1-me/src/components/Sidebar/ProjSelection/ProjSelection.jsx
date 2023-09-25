import React from "react";
import "./ProjSelection.css";

function ProjSelection() {
  return (
    <div className="proj-selec-container">
      <div className="proj-logo">
        <ion-icon name="beer" className="beer-icon"></ion-icon>
      </div>
      <div className="proj-title-member-container">
        <div className="proj-title-container">
          <p className="proj-title">Hatypo Projects</p>
          <ion-icon
            name="chevron-down-outline"
            className="dropdown-icon"
          ></ion-icon>
        </div>
        <div className="proj-member-container">
          <p className="proj-member">11 member</p>
        </div>
      </div>
    </div>
  );
}

export default ProjSelection;
