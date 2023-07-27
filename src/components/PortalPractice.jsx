import React from "react"
import ReactDOM from 'react-dom'

const PortalPractice = ()=>{
    return (
        ReactDOM.createPortal(<h1>react portal practice</h1>,document.getElementById('portal-root'))
    )
}

export default PortalPractice