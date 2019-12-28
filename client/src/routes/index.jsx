import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { getSessionCookie, SessionContext } from '../session'
import Signin from '../components/Signin'
import Home from '../components/Home'
import NotFound from '../components/NotFound'


const history = createBrowserHistory()
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        getSessionCookie() === undefined
            ? <Redirect to='/login' /> 
            : <Component {...props} />
    )} />)

const Routing = () => {

    const [session, setSession] = useState(getSessionCookie());

    useEffect(() => {
        setSession(getSessionCookie());
    }, [session]);

    return (
        <SessionContext.Provider value={session} >
            <Router history={history}>
                <Switch>
                    <Route path="/login" component={Signin} />
                    <PrivateRoute exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </SessionContext.Provider>
    )
}

export default Routing
