import React from 'react'

import { Route, Switch } from 'react-router-dom'


import Dashboard from '../pages/admin/Dashboard'
import Customers from '../pages/admin/Customers'


const RoutesAdmin = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard} />
            <Route path='/admin/customers' component={Customers} />
        </Switch>
    )
}

export default RoutesAdmin
