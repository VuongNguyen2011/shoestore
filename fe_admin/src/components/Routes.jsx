import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import AddColor from '../pages/Colors/AddColor'
import Colors from '../pages/Colors/Colors'
import EditColor from '../pages/Colors/EditColor'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/Colors' component={Colors}/>
            <Route path='/AddColor' component={AddColor}/>
            <Route path='/edit-product/:id' component={EditColor}/>
        </Switch>
    )
}

export default Routes
