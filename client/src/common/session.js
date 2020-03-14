import React from 'react'
import Cookies from 'js-cookie';

const setSessionCookie = (session) => {
    Cookies.remove('session')
    Cookies.set('session', session, { expires: 14 })
}

const getSessionCookie = () => {
    let actualSession = Cookies.get('session')
    return actualSession === undefined ? {} : JSON.parse(Cookies.get('session'))
}

const remoteSessionCookie = () => Cookies.remove('session')

export { setSessionCookie, getSessionCookie, remoteSessionCookie }
