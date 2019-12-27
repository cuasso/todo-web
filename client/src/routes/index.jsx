import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Signup from '../components/Signup'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Signup} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routing