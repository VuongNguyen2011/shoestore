import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import Customers from "../pages/admin/Customers";
import Category from "../pages/admin/Categorys/Categorys"
import Color from "../pages/admin/Colors/Colors";

const RoutesAdmin = () => {
  return (
    <Switch>
      <Route path="/admin" exact component={Dashboard} />
      <Route path="/admin/customers" component={Customers} />
      <Route path="/admin/category" exact component={Category} />
      <Route path="/admin/color" exact component={Color} />
    </Switch>
  );
};

export default RoutesAdmin;
