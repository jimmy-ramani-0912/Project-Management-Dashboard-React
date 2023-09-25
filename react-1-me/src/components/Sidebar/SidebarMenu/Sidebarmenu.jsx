import React from "react";
import "./sidebarmenu.css";

function Sidebarmenu() {
  return (
    <div className="sidebarmenu">
      <ul className="sidebar-options">
        <li className="menu-item">
          <ion-icon name="home-outline" className="menu-option-icon"></ion-icon>
          <h2 className="menu-option-title">Home</h2>
        </li>
        <li className="menu-item">
          <ion-icon
            name="checkmark-done-circle-outline"
            className="menu-option-icon"
          ></ion-icon>
          <h2 className="menu-option-title">My Task</h2>
          <div className="pending-circle">
            <p className="pending-number">4</p>
          </div>
        </li>
        <li className="menu-item">
          <ion-icon
            name="cloud-offline-outline"
            className="menu-option-icon"
          ></ion-icon>
          <h2 className="menu-option-title">Inbox</h2>
        </li>
        <li className="menu-item">
          <ion-icon
            name="cellular-outline"
            className="menu-option-icon"
          ></ion-icon>
          <h2 className="menu-option-title">Reporting</h2>
        </li>
        <li className="menu-item">
          <ion-icon
            name="id-card-outline"
            className="menu-option-icon"
          ></ion-icon>
          <h2 className="menu-option-title">Portfolios</h2>
        </li>
        <li className="menu-item">
          <ion-icon
            name="trophy-outline"
            className="menu-option-icon"
          ></ion-icon>
          <h2 className="menu-option-title">Goals</h2>
        </li>
      </ul>
    </div>
  );
}

export default Sidebarmenu;
