import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components from the pages
import Home from "../pages/Home";
import Header from "../Components/Header/Header";

// routes
import SidebarRoute from "./Sidebar";

const Routes = () => {
  const [hideSidebar, unHideSidebar] = useState(false);
  return (
    <Router>
      <Header hideSidebar={hideSidebar} unHideSidebar={unHideSidebar} />
      <Switch>
        <SidebarRoute
          exact
          path="/"
          component={Home}
          hideSidebar={hideSidebar}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
