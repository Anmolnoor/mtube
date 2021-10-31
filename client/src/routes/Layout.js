import React from "react";
import "./route.css";
const Layout = ({ hideSidebar, Component, props, Sidebar }) => {
  return (
    <>
      <div className="container">
        <div className={hideSidebar ? "sidebar" : "sidebart"}>
          <Sidebar hideSidebar={hideSidebar} />
        </div>
        <div className={hideSidebar ? "maincontent" : "maincontentt"}>
          <Component {...props} />
        </div>
      </div>
    </>
  );
};

export default Layout;
