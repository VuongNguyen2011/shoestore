import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "./sidebar/Sidebar";
import TopNav from "./topnav/TopNav";

import { Route, Switch } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../redux/actions/ThemeAction";
import rootReducer from "../redux/reducers";
import { createStore } from "redux";

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

const LayoutAdmin = () => {
  // const themeReducer = useSelector(state => state.ThemeReducer)
  // themeReducer.mode = 'theme-mode-light'
  // themeReducer.color = 'theme-color-blue'
  const dispatch = useDispatch();

  // useEffect(() => {

  //     // const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

  //     // const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

  //     // console.log(themeClass)
  //     // console.log(colorClass)

  //     dispatch(ThemeAction.setMode('theme-mode-light'))

  //     dispatch(ThemeAction.setColor('theme-color-blue'))
  // }, [dispatch])

  return (
    <Route
      render={(props) => (
        <div className={`layout theme-mode-light theme-color-blue`}>
          <Sidebar {...props} />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
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
                <Route path="/admin/addcategories" component={AddCategory} />
                <Route path="/admin/editcategory/:id" component={EditCategory} />
                <Route path="/admin/products" component={Products} />
                <Route path="/admin/addproduct" component={AddProduct} />
                <Route path="/admin/editproduct/:id" component={EditProduct} /> 
              </Switch>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default LayoutAdmin;
