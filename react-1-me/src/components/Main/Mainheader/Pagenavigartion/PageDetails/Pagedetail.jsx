import React from "react";
import Requesttype from "./RequestType/Requesttype";
import "./pagedetail.css";
import img1 from "../../../../../assets/profiles/user.jpg";
import img2 from "../../../../../assets/profiles/user-1.jpg";
import img3 from "../../../../../assets/profiles/user-2.jpg";
import img4 from "../../../../../assets/profiles/user-3.jpg";
import img5 from "../../../../../assets/profiles/user-4.jpg";
import img6 from "../../../../../assets/profiles/user-5.jpg";
import other1 from "../../../../../assets/profiles/other1.jpg";
import other2 from "../../../../../assets/profiles/other2.jpg";
import other3 from "../../../../../assets/profiles/other3.jpg";

function Pagedetail() {
  const requestTypes = [
    {
      title: "New request",
      data: [
        {
          priotitle: "High",
          title: "Hero Section",
          sdate: "20 May, 2023",
          edate: "24 May, 2023",
          img: img1,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 5,
          attachment: 3,
        },
        {
          priotitle: "Low",
          title: "Knowledge Center",
          sdate: "21 May, 2023",
          edate: "25 May, 2023",
          img: img3,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 1,
          attachment: 4,
          cardimg: other1,
        },
        {
          priotitle: "Medium",
          title: "Careers",
          sdate: "21 May, 2023",
          edate: "25 May, 2023",
          img: img2,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 5,
          attachment: 2,
        },
      ],
    },
    {
      title: "In progress",
      data: [
        {
          priotitle: "High",
          title: "About us section",
          sdate: "20 May, 2023",
          edate: "24 May, 2023",
          img: img4,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 5,
          attachment: 3,
        },
        {
          priotitle: "Medium",
          title: "Legal Notice",
          sdate: "21 May, 2023",
          edate: "25 May, 2023",
          img: img5,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 5,
          attachment: 2,
          cardimg: other2,
        },
        {
          priotitle: "Low",
          title: "Knowledge Center",
          sdate: "21 May, 2023",
          edate: "25 May, 2023",
          img: img3,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 1,
          attachment: 4,
          cardimg: other1,
        },
      ],
    },
    {
      title: "Need Review",
      data: [
        {
          priotitle: "High",
          title: "Discover Section",
          sdate: "20 May, 2023",
          edate: "24 May, 2023",
          img: img1,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 5,
          attachment: 3,
          cardimg: other3,
        },
        {
          priotitle: "Low",
          title: "Provider",
          sdate: "21 May, 2023",
          edate: "25 May, 2023",
          img: img2,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 5,
          attachment: 2,
        },
        {
          priotitle: "Medium",
          title: "Knowledge Center",
          sdate: "21 May, 2023",
          edate: "25 May, 2023",
          img: img3,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 1,
          attachment: 4,
        },
      ],
    },
    {
      title: "Done",
      data: [
        {
          priotitle: "High",
          title: "Purchase, finance, service section",
          sdate: "20 May, 2023",
          edate: "24 May, 2023",
          img: img1,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 5,
          attachment: 3,
        },
        {
          priotitle: "Low",
          title: "Knowledge Center",
          sdate: "21 May, 2023",
          edate: "25 May, 2023",
          img: img6,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 1,
          attachment: 4,
        },
      ],
    },
    {
      title: "Done",
      data: [
        {
          priotitle: "High",
          title: "Purchase, finance, service section",
          sdate: "20 May, 2023",
          edate: "24 May, 2023",
          img: img1,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 5,
          attachment: 3,
        },
        {
          priotitle: "Low",
          title: "Knowledge Center",
          sdate: "21 May, 2023",
          edate: "25 May, 2023",
          img: img6,
          desc: "the main written part of a book, newspaper, etc. not the pictures, notes, index, etc",
          subtask: 1,
          attachment: 4,
        },
      ],
    },
  ];

  return (
    <div
      className="pagedetails"
      style={{ gridTemplateColumns: "repeat(5, 30rem)" }}
    >
      {requestTypes.map((requestType, index) => (
        <div className="req-type" key={index}>
          <Requesttype reqtitle={requestType.title} data={requestType.data} />
        </div>
      ))}
    </div>
  );
}

export default Pagedetail;
