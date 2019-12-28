import React from 'react'
import Cookies from 'js-cookie';

const setSessionCookie = (session) => {
    Cookies.remove('session')
    Cookies.set('session', session, { expires: 14 })
}

const getSessionCookie = () => { return Cookies.get('session') }

const SessionContext = React.createContext(getSessionCookie())

export { setSessionCookie, getSessionCookie, SessionContext }
