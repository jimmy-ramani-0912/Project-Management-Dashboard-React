import React from "react";
import "./otherprojecttitle.css";

function Otherprojecttitle(props) {
  const { title, profiles, subtitles } = props;

  return (
    <div className="otherprojecttitles">
      <div className="main-title">
        <div className="main-title-left">
          {title === "Mercedes project" ? (
            <ion-icon
              name="chevron-down-outline"
              className="dropdown-icon"
            ></ion-icon>
          ) : (
            <ion-icon name="chevron-forward"></ion-icon>
          )}
          <h2 className="title">{title}</h2>
        </div>
        <div className="main-title-right">
          <ion-icon name="add-outline" className="add-icon"></ion-icon>
        </div>
      </div>
      {profiles && (
        <div className="profiles">
          {profiles.map((item, index) => (
            <img
              src={item}
              key={index}
              className="team__header-top-profile-img"
            />
          ))}
        </div>
      )}
      {subtitles && (
        <div className="sub-titles">
          {subtitles.map((item, index) => (
            <div className="sub-title-container" key={index}>
              {index === 2 || index === 3 ? (
                <div className="design-box-yellow"></div>
              ) : index === 4 ? (
                <div className="design-box-puple"></div>
              ) : index === 5 ? (
                <div className="design-box-blue"></div>
              ) : (
                <div className="design-box"></div>
              )}
              <p className="sub-title-container-title">{item}</p>
              {index === 1 ? (
                <div className="star-icon">
                  <ion-icon name="star"></ion-icon>
                </div>
              ) : (
                <div></div>
              )}
              {index === 2 ? (
                <ion-icon name="lock-closed"></ion-icon>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Otherprojecttitle;
