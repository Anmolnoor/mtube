import React from "react";
import PP from "../../Assets/Images/pp.jpg";

import "./object.css";
import { FaEllipsisV } from "react-icons/fa";

const VObject = ({ imgs, title, name, view, time }) => {
  return (
    <div className="VO--BOX">
      <div className="top--image">
        <img src={imgs} alt="bg--video" width="384px" height="216px" />
        <p className="timer">17:00</p>
      </div>
      <div className="bottom--detail">
        <div className="profile--bottom">
          <img
            src={PP}
            alt="user-profile"
            height="50"
            width="50"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="more--details">
          <div className="title--bottom">{title}</div>
          <div className="channel-name--bottom">{name} </div>
          <div className="vat--details">
            <div className="total--views">{view} Views</div>
            <div className="upload--time">{time}</div>
          </div>
        </div>
        <div className="menu--object">
          <FaEllipsisV size="24" />
        </div>
      </div>
    </div>
  );
};

export default VObject;
