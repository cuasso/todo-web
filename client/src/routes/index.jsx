import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Signin from '../components/Signin'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Signin} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routing