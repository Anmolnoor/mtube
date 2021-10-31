import React from "react";
import VObject from "../Components/videoObjects/Object";
import bg0 from "../Assets/Images/0.jpg";
import bg1 from "../Assets/Images/1.jpg";
import bg2 from "../Assets/Images/2.jpg";
import bg3 from "../Assets/Images/3.png";
import bg4 from "../Assets/Images/4.jpg";
import bg5 from "../Assets/Images/5.jpg";
import "./home.css";
const Home = () => {
  const items = [
    {
      igm: bg0,
      title: "title number 1",
      name: "Channel name 1",
      views: "4 M",
      time: "4 days ago",
    },
    {
      igm: bg1,
      title: "title number 2",
      name: "Channel name 2",
      views: "2 M",
      time: "2 days ago",
    },
    {
      igm: bg2,
      title: "title number 3",
      name: "Channel name 3",
      views: "3 M",
      time: "3 days ago",
    },
    {
      igm: bg3,
      title: "title number 4",
      name: "Channel name 4",
      views: "4 M",
      time: "3 days ago",
    },
    {
      igm: bg4,
      title: "title number 5",
      name: "Channel name 5",
      views: "5 M",
      time: "5 days ago",
    },
    {
      igm: bg5,
      title: "title number 6",
      name: "Channel name 6",
      views: "6 M",
      time: "6 days ago",
    },
  ];
  return (
    <div className="main--home">
      <div className="home-container">
        {items.map((item, index) => (
          <VObject
            key={index}
            imgs={item.igm}
            title={item.title}
            name={item.name}
            view={item.views}
            time={item.time}
          />
        ))}
        {items.map((item, index) => (
          <VObject
            key={index}
            imgs={item.igm}
            title={item.title}
            name={item.name}
            view={item.views}
            time={item.time}
          />
        ))}
        {items.map((item, index) => (
          <VObject
            key={index}
            imgs={item.igm}
            title={item.title}
            name={item.name}
            view={item.views}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
