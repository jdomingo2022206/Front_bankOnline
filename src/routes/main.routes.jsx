import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/HomePage.jsx'));
const Dashboard = lazy(() => import('../pages/DashboardPage.jsx'))

const mainRoutes = [
    { path: '/', element: <Home /> },
    { path: '/dashboard/*', element: <Dashboard />}

]

export default mainRoutes;