import { useState, useEffect } from 'react'
import { getSessionCookie } from '../common/session'

const useSession = () => {

    const [session, setSession] = useState(getSessionCookie())

    useEffect(() => {
        setSession(getSessionCookie())
    }, [session])

    return session
}

export default useSession



