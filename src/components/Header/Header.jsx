import React, { useState } from "react";
import "./header.css";
import Divisionline from "../../comman-components/Divisionline/Divisionline";
import Date from "./Date/Date";
import Otherheaderinfo from "./Otherheaderinfo/Otherheaderinfo";
import Logo from "../Sidebar/Logo/Logo";
import Search from "./Otherheaderinfo/Search/Search";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSidebarCancelClick = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="header">
      <div className="header-section">
        <div className="sidebar-icon-logo-mobile">
          <div className="sidebar-icon" onClick={toggleSidebar}>
            <ion-icon name="filter-outline"></ion-icon>
          </div>
          <Logo />
        </div>
        <div className="date-section">
          <Date />
        </div>
        <div className="mobile-divider">
          <Divisionline />
        </div>
        <div className="search-section">
          <Search />
        </div>
        <div className="other-section">
          <Otherheaderinfo />
        </div>
      </div>
      <div className="divider">
        <Divisionline />
      </div>
      {isSidebarVisible && (
        <div className="sidebar-visible">
          <Sidebar
            cancellIcon={true}
            onCancelClick={handleSidebarCancelClick}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
