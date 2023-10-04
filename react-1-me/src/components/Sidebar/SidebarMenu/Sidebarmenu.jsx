import React from "react";
import "./sidebarmenu.css";

const menuItems = [
  {
    icon: "home-outline",
    title: "Home",
  },
  {
    icon: "checkmark-done-circle-outline",
    title: "My Task",
    pendingCount: 4,
  },
  {
    icon: "cloud-offline-outline",
    title: "Inbox",
  },
  {
    icon: "cellular-outline",
    title: "Reporting",
  },
  {
    icon: "id-card-outline",
    title: "Portfolios",
  },
  {
    icon: "trophy-outline",
    title: "Goals",
  },
];

function Sidebarmenu() {
  return (
    <div className="sidebarmenu">
      <ul className="sidebar-options">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="menu-item">
            <a className="menu-item-link">
              <ion-icon
                name={menuItem.icon}
                className="menu-option-icon"
              ></ion-icon>
              <h2 className="menu-option-title">{menuItem.title}</h2>
              {menuItem.pendingCount && (
                <div className="pending-circle">
                  <p className="pending-number">{menuItem.pendingCount}</p>
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebarmenu;
