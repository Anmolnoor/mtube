import React from "react";
import {
  FaHome,
  FaPhotoVideo,
  FaWpexplorer,
  FaAddressBook,
} from "react-icons/fa";
import "./sidebar.css";
const Sidebar = ({ hideSidebar }) => {
  const listItem = [
    { icon: FaHome, title: "Home" },
    { icon: FaWpexplorer, title: "Explore" },
    { icon: FaPhotoVideo, title: "Subscriptions" },
    { icon: FaAddressBook, title: "Library" },
  ];

  return hideSidebar ? (
    <div className="outer--wrap">
      <div className="contaiiner">
        {listItem.map((item, index) => {
          return (
            <div key={index} className="box--sidebar">
              <div className="icon--sidebar">
                <item.icon size="28" />
              </div>
              <span className="text--sidebar"> {item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="outer--wrap">
      <div className="contaiiner2">
        {listItem.map((item, index) => {
          return (
            <div key={index} className="box--sidebar2">
              <div className="icon--sidebar2">
                <item.icon size="28" />
              </div>
              <span className="text--sidebar2"> {item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
  //   );
};

export default Sidebar;
