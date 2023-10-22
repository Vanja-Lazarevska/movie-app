import React from 'react';
import { Outlet, Navigate } from "react-router-dom";


const GuardedRoute = () => {
    const token = localStorage.getItem('token')
    console.log('TOKENNNNNN',token)
    return ( token !== null ? <Outlet/> : <Navigate to="signIn"/>)
}

export default GuardedRoute