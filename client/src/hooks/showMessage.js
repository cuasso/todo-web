import { useState } from 'react'


const useMessage = () => {  

    const [show,setShow] = useState(false)
    const [message,setMessage] = useState('')
    
    const showMessage = (showOrHide,text = '') => {
        setShow(showOrHide)
        setMessage(text)
    }

    return {
        show,
        message,
        showMessage
    }
}

export default useMessage
