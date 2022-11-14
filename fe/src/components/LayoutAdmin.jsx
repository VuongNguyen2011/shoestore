import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "./sidebar/Sidebar";
import TopNav from "./topnav/TopNav";

import { Route, Switch } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../redux/actions/ThemeAction";
import Dashboard from "../pages/admin/Dashboard";
import rootReducer from "../redux/reducers";
import { createStore } from "redux";
import Customers from "../pages/admin/Customers";

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
                {/* <Route path='/Colors' component={Colors} />
                            <Route path='/AddColor' component={AddColor} />
                            <Route path='/edit-color/:id' component={EditColor} />
                            <Route path='/Sizes' component={Sizes} />
                            <Route path='/AddSize' component={AddSize} />
                            <Route path='/edit-size/:id' component={EditSize} />
                            <Route path='/Categorys' component={Categorys} />
                            <Route path='/AddCategory' component={AddCategory} />
                            <Route path='/edit-Category/:id' component={EditCategory} />
                            <Route path='/Products' component={Products} />
                            <Route path='/AddProduct' component={AddProduct} />
                            <Route path='/edit-product/:id' component={EditProduct} /> */}
              </Switch>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default LayoutAdmin;
