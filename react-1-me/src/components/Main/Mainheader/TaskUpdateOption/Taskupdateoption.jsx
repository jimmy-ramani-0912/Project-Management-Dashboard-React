import React from "react";
import "./Taskupdateoption.css";

function Taskupdateoption() {
  return (
    <div className="main-header-option">
      <div className="taks-update-detail">
        <div className="clock-icon">
          <ion-icon name="time-outline"></ion-icon>
        </div>
        <h3 className="task-update-title">Last task update : 39 minute ago</h3>
      </div>
      <div className="task-detail-option">
        <div className="list-option">
          <div className="option-icon">
            <ion-icon name="checkbox-outline"></ion-icon>
          </div>
          <h3 className="task-opt-title">All Task</h3>
        </div>
        <div className="list-option">
          <div className="option-icon">
            <ion-icon name="filter-outline"></ion-icon>{" "}
          </div>
          <h3 className="task-opt-title">Filter</h3>
        </div>
        <div className="list-option">
          <div className="option-icon option-icon-selected">
            <ion-icon name="funnel-outline"></ion-icon>
          </div>
          <h3 className="task-opt-title task-opt-title-selected">
            Sort : Priority
          </h3>
        </div>
        <div className="list-option">
          <div className="option-icon">
            <ion-icon name="earth-outline"></ion-icon>{" "}
          </div>
          <h3 className="task-opt-title">Public link : off</h3>
        </div>
        <div className="list-option">
          <div className="option-icon">
            <ion-icon name="pencil-outline"></ion-icon>{" "}
          </div>
          <h3 className="task-opt-title">Customize</h3>
        </div>
      </div>
    </div>
  );
}

export default Taskupdateoption;
