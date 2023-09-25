import React from "react";
import "./mainheader.css";
import img from "../../../assets/profiles/user.jpg";
import img1 from "../../../assets/profiles/user-4.jpg";
import img2 from "../../../assets/profiles/user-3.jpg";
import img3 from "../../../assets/profiles/user-1.jpg";

function Mainheader() {
  return (
    <div className="main-header">
      <div className="main-header-left">
        <h2 className="main-header-left-title">Mercedes Project</h2>
        <div className="right-icon">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
        <div className="landing-icon">
          <ion-icon name="logo-buffer" className="landing"></ion-icon>
        </div>
        <h2 className="main-header-left-title-selected">Landing page</h2>
        <div className="down-icon">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div className="star-icon-main-header">
          <ion-icon name="star-outline"></ion-icon>
        </div>
        <div className="info-icon">
          <ion-icon name="information-circle-outline"></ion-icon>
        </div>
      </div>
      <div className="main-header-right">
        <div className="imgs-sec">
          <img src={img} alt="" className="img" />
          <img src={img1} alt="" className="img" />
          <img src={img2} alt="" className="img" />
          <img src={img3} alt="" className="img" />
        </div>
        <div className="add-sec">
          <ion-icon name="add-outline"></ion-icon>
        </div>
        <div className="share-sec">
          <div className="share-icon">
            <ion-icon name="share-social"></ion-icon>
          </div>
          <h3 className="text-share">share</h3>
        </div>
      </div>
    </div>
  );
}

export default Mainheader;
