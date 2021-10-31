import React from "react";
import { Route } from "react-router-dom";

import Sidebar from "../Components/Sidebar/Sidebar";
import "./route.css";
import Layout from "./Layout";
const SidebarRoute = ({
  hideSidebar: hideSidebar,
  component: Component,
  ...rest
}) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <Layout
            hideSidebar={hideSidebar}
            props={props}
            Component={Component}
            Sidebar={Sidebar}
          />
        )}
      />
    </>
  );
};

export default SidebarRoute;
