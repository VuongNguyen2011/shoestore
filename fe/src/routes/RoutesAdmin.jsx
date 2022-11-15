import React from "react";

import { Route, Switch } from "react-router-dom";

import Customers from "../pages/admin/Customers";
import Dashboard from "../pages/admin/Dashboard";
import Category from "../pages/admin/Categorys/Categorys";
import AddCategory from "../pages/admin/Categorys/AddCategory";
import EditCategory from "../pages/admin/Categorys/EditCategory";
import Colors from "../pages/admin/Colors/Colors";
import AddColor from "../pages/admin/Colors/AddColor";
import EditColor from "../pages/admin/Colors/EditColor";
import Products from "../pages/admin/Products/Products";
import AddProduct from "../pages/admin/Products/AddProduct";
import EditProduct from "../pages/admin/Products/EditProduct";
import Sizes from "../pages/admin/Sizes/Sizes";
import AddSize from "../pages/admin/Sizes/AddSize";
import EditSize from "../pages/admin/Sizes/EditSize";

const RoutesAdmin = () => {
  return (
    <Switch>
      <Route path="/admin" exact component={Dashboard} />
      <Route path="/admin/customers" component={Customers} />
      <Route path="/admin/products" component={Products} />
      <Route path="/admin/colors" component={Colors} />
      <Route path="/admin/addcolor" component={AddColor} />
      <Route path="/admin/editcolor/:id" component={EditColor} />
      <Route path="/admin/sizes" component={Sizes} />
      <Route path="/admin/addsize" component={AddSize} />
      <Route path="/admin/editsize/:id" component={EditSize} />
      <Route path="/admin/categories" component={Category} />
      <Route path="/admin/addcategory" component={AddCategory} />
      <Route path="/admin/editcategory/:id" component={EditCategory} />
      <Route path="/admin/products" component={Products} />
      <Route path="/admin/addproduct" component={AddProduct} />
      <Route path="/admin/editproduct/:id" component={EditProduct} />
    </Switch>
  );
};

export default RoutesAdmin;
