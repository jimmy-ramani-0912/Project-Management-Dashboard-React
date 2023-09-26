import React from "react";
import "./requesttype.css";
import Divisionline from "../../../../../../comman-components/Divisionline/Divisionline";

function Requesttype(props) {
  const { reqtitle, data } = props;

  let classNames = "box-req ";
  let cardclass = "card-sec ";
  if (reqtitle === "New request") {
    classNames += "box-req-red";
  } else if (reqtitle === "In progress") {
    classNames += "box-req-blue";
  } else if (reqtitle === "Need Review") {
    classNames += "box-req-yellow";
  } else if (reqtitle === "Done") {
    classNames += "box-req-green";
    cardclass += "opac";
  }

  let classNames2 = "priority-text ";
  data.map((item, i) => {
    if (item.priotitle === "High") {
      classNames2 += "red";
    } else if (item.priotitle === "Medium") {
      classNames2 += "yellow";
    } else if (item.priotitle === "Low") {
      classNames2 += "blue";
    }
  });

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }

  return (
    <div className="request-sec">
      <div className="req-type">
        <div className="title-req">
          <div className={classNames}></div>
          <h3 className="type-req-title">{reqtitle}</h3>
        </div>
        <div className="req-icons">
          <ion-icon name="add-outline"></ion-icon>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="cards-sec">
        {data.map((item) => (
          <div className={cardclass}>
            <div className="priority-option">
              <div className={getClassNamesBack(item.priotitle)}>
                <p className={getClassNames(item.priotitle)}>
                  {item.priotitle} Priority
                </p>
              </div>
              <div className="option-icon-card">
                <ion-icon name="ellipsis-vertical"></ion-icon>
              </div>
            </div>
            {reqtitle === "Done" ? (
              <h1 className="card-title">
                <s>{item.title}</s>
              </h1>
            ) : (
              <h1 className="card-title">{item.title}</h1>
            )}
            {item.cardimg && (
              <div className="card-img">
                <img src={item.cardimg} alt="" className="img-card" />
              </div>
            )}
            <div className="img-duration">
              <img src={item.img} alt="" />
              <h3 className="duration">
                {item.sdate} - {item.edate}
              </h3>
            </div>
            <div className="desc">
              <p className="desc-text">{truncateText(item.desc, 110)}</p>
            </div>
            <Divisionline />
            <div className="subtask-attach">
              <div className="subtask">
                <div className="subtask-icon">
                  <ion-icon name="briefcase"></ion-icon>
                </div>
                <div className="subtask-cnt">{item.subtask} Subtask</div>
              </div>
              <div className="attachment">
                <div className="attchment-icon">
                  <ion-icon name="link"></ion-icon>
                </div>
                <div className="attachment-cnt">{item.attachment} Subtask</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getClassNames(priorityTitle) {
  let priorityClass = "";
  if (priorityTitle === "High") {
    priorityClass = "red";
  } else if (priorityTitle === "Medium") {
    priorityClass = "yellow";
  } else if (priorityTitle === "Low") {
    priorityClass = "blue";
  }
  return `priority-text ${priorityClass}`;
}
function getClassNamesBack(priorityTitle) {
  let backClass = "";
  if (priorityTitle === "High") {
    backClass = "red-back";
  } else if (priorityTitle === "Medium") {
    backClass = "yellow-back";
  } else if (priorityTitle === "Low") {
    backClass = "blue-back";
  }
  return `priority-title ${backClass}`;
}

export default Requesttype;
