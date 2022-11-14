import React from "react";
import { Route, Switch } from "react-router-dom";
import Customers from "../../pages/Admin/pages/Customers";
import Dashboard from "../../pages/Admin/pages/Dashboard";
import Products from "../../pages/Admin/pages/Products";
import Colors from "../../pages/Admin/pages/Colors/Colors";
import AddColor from '../../pages/Admin/pages/Colors/AddColor'
import EditColor from "../../pages/Admin/pages/Colors/EditColor";

export default function AdminRoute() {
  return (
    <Switch>
      <Route path="/admin/" exact component={Dashboard} />
      <Route path="/admin/customers" exact component={Customers} />
      <Route path="/admin/products" exact component={Products} />
      <Route path='/admin/colors' component={Colors}/>
      <Route path="/admin/addcolor" component={AddColor} />
      <Route path="/admin/edit-product/:id" component={EditColor} />
    </Switch>
  );
}
