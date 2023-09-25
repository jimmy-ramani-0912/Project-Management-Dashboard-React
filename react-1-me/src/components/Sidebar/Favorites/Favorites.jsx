import React from "react";
import "./favorites.css";

function Favorites() {
  return (
    <div className="favorites">
      <div className="star-icon-fav">
        <ion-icon name="star"></ion-icon>
      </div>
      <h2 className="fav-title">Favorites</h2>
    </div>
  );
}

export default Favorites;
