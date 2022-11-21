import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import test from "../pages/test";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" exact component={test} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  )
};

export default Routes;
