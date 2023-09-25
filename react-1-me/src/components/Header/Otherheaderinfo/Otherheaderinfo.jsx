import React from "react";
import "./otherheaderinfo.css";
import img from "../../../assets/profiles/user-4.jpg";

function Otherheaderinfo() {
  return (
    <div className="otherheaderinfo">
      <div class="search">
        <div className="search-icon">
          <ion-icon name="search"></ion-icon>
        </div>
        <input type="text" placeholder="Search on workpace" />
      </div>
      <div className="setting-icon">
        <ion-icon name="settings-outline"></ion-icon>
      </div>
      <div className="notification-icon">
        <ion-icon name="notifications-outline"></ion-icon>
        <div className="dot"></div>
      </div>
      <div className="profile-img">
        <img src={img} alt="img" />
      </div>
      <div className="profile-name">
        <p>Jimmy Ramani</p>
      </div>
    </div>
  );
}

export default Otherheaderinfo;
