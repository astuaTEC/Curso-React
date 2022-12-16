import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { Navbar } from './Navbar'

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <Navbar />

            <hr />

            <Outlet />
        </UserProvider>
    )
}
