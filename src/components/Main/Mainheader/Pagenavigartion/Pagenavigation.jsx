import React from "react";
import "./pagenavigation.css";
import Divisionline from "../../../../comman-components/Divisionline/Divisionline";
import Pagedetail from "./PageDetails/Pagedetail";

function Pagenavigation() {
  return (
    <div className="page">
      <div className="pagenavigation">
        <div className="option-pages">
          <h2 className="option-page-title">Overview</h2>
        </div>
        <div className="option-pages">
          <h2 className="option-page-title">List</h2>
        </div>
        <div className="option-pages option-page-selected">
          <h2 className="option-page-title option-page-title-selected">
            Boards
          </h2>
        </div>
        <div className="option-pages">
          <h2 className="option-page-title">Timeline</h2>
        </div>
        <div className="option-pages">
          <h2 className="option-page-title">Calendar</h2>
        </div>
        <div className="option-pages">
          <h2 className="option-page-title">Workflow</h2>
        </div>
        <div className="option-pages">
          <h2 className="option-page-title">Dashboard</h2>
        </div>
        <div className="option-pages">
          <h2 className="option-page-title">More..</h2>
        </div>
      </div>
      <Divisionline />
      <Pagedetail />
    </div>
  );
}

export default Pagenavigation;
