

import React from 'react'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Protectroute = ({children,isAuth}) => {
    //console.log(isAuth)
    if(!isAuth)
    return <Navigate to ="/signup" replace />


    return children

 
}

export default Protectroute