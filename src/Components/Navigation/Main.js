import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Admin from "../Screen/Admin/Container/Main";
import Visitor from "../Screen/Visitor/Container/Main";
import AdminLogin from "../Screen/Admin/Login/Main";
import AdminDashboard from "../Screen/Admin/Dashboard/Main";
import AdminSignup from "../Screen/Admin/Signup/Main";

const Main = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/visitor" component={Visitor} />
      <Route exact path="/admin" component={Admin} />

      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/signup" component={AdminSignup} />
      <Route path="/admin/dashboard" component={AdminDashboard} />

    </Switch>
    </BrowserRouter>
  );
};

export default Main;
