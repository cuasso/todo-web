import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { getSessionCookie } from '../common/session'
import Signin from '../components/Signin'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import useSession from '../hooks/sessionHook'


const history = createBrowserHistory()
const SessionContext = React.createContext(getSessionCookie())
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        getSessionCookie().token === undefined
            ? <Redirect to='/login' />
            : <Component {...props} />
    )} />)

const LoginRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        getSessionCookie().token !== undefined
            ? <Redirect to='/' />
            : <Component {...props} />
    )} />)

const Routing = () => {

    const session = useSession()

    return (
        <SessionContext.Provider value={session} >
            <Router history={history}>
                <Switch>
                    <LoginRoute path="/login" component={Signin} />
                    <PrivateRoute exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </SessionContext.Provider>
    )
}

export default Routing
