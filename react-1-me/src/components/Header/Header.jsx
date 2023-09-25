import React from "react";
import "./header.css";
import Divisionline from "../../comman-components/Divisionline/Divisionline";
import Date from "./Date/Date";
import Otherheaderinfo from "./Otherheaderinfo/Otherheaderinfo";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-section">
          <Date />
          <Otherheaderinfo />
        </div>
        <Divisionline />
      </div>
    </>
  );
};

export default Header;
