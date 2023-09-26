// import React from "react";
// import Divisionline from "../../../../../../../comman-components/Divisionline/Divisionline";
// import "./card.css";

// function Card(props) {
//   const { priotitle, title, sdate, edate, img, desc, subtask, attachment } =
//     props;

//   let classNames = "priority-text ";
//   if (priotitle === "High") {
//     classNames += "red";
//   } else if (priotitle === "Medium") {
//     classNames += "yellow";
//   } else if (priotitle === "Low") {
//     classNames += "blue";
//   }

//   return (
//     <div className="card-sec">
//       <div className="priority-option">
//         <div className="priority-title">
//           <p className={classNames}>{priotitle} Priority</p>
//         </div>
//       </div>
//       <h1 className="card-title">{title}</h1>
//       <div className="img-duration">
//         <img src={img} alt="" />
//         <h3 className="duration">
//           {sdate} - {edate}
//         </h3>
//       </div>
//       <div className="desc">
//         <p className="desc-text">{desc}</p>
//       </div>
//       <Divisionline />
//       <div className="subtask-attach">
//         <div className="subtask">
//           <ion-icon name="briefcase"></ion-icon>
//           <div className="subtask-cnt">{subtask} Subtask</div>
//         </div>
//         <div className="attachment">
//           <ion-icon name="link"></ion-icon>
//           <div className="attachment-cnt">{attachment} Subtask</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
