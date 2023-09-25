import React from "react";
import "./sidebar.css";
import Logo from "./Logo/Logo";
import ProjSelection from "./ProjSelection/ProjSelection";
import Sidebarmenu from "./SidebarMenu/Sidebarmenu";
import Divisionline from "../../comman-components/Divisionline/Divisionline";
import Otherproject from "./Otherprojct/Otherproject";
import Favorites from "./Favorites/Favorites";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Logo />
        <ProjSelection />
        <Sidebarmenu />
        <Divisionline />
        <Otherproject />
        <Divisionline />
        <Favorites />
      </div>
    </>
  );
};

export default Sidebar;
