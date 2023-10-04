import React, { useState } from "react";
import "./ProjSelection.css";

function ProjSelection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dropdownItems = [
    {
      logo: "beer",
      title: "Hatypo Projects",
      member: "11 members",
    },
    {
      logo: "logo-behance",
      title: "Another Projects",
      member: "10 members",
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  return (
    <div className="proj-selec-container" onClick={toggleDropdown}>
      <div className="drop-item">
        <div className="proj-logo">
          <ion-icon
            name={selectedItem ? selectedItem.logo : "beer"}
            className="beer-icon"
          ></ion-icon>
        </div>
        <div className="proj-title-member-container">
          <div className="proj-title-container">
            <p className="proj-title">
              {selectedItem ? selectedItem.title : "Hatypo Projects"}
            </p>
            <ion-icon
              name="chevron-down-outline"
              className="dropdown-icon"
            ></ion-icon>
          </div>
          <div className="proj-member-container">
            <p className="proj-member">
              {selectedItem ? selectedItem.member : "11 members"}
            </p>
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-content">
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleDropdownItemClick(item)}
            >
              <div className="proj-logo">
                <ion-icon name={item.logo} className="beer-icon"></ion-icon>
              </div>
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjSelection;
