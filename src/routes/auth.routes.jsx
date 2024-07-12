import React, { lazy } from 'react'

const Login = lazy(() => import('../pages/LoginPage'));

const authRoutes = [
    { path: '/login', element: <Login /> },

]

export default authRoutes;
