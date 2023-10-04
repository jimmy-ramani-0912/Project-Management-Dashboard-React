import React from "react";
import "./search.css";

function Search() {
  return (
    <div class="search">
      <div className="search-icon">
        <ion-icon name="search"></ion-icon>
      </div>
      <input type="text" placeholder="Search on workpace" />
    </div>
  );
}

export default Search;
