import React from 'react'
import { Route, Routes } from "react-router-dom";
import dashboardRoutes from '../routes/dashboard.routes';
import { Sidebar } from '../components/dashboard/Sidebar';
import Navbar from '../components/navbar/Navbar';
import useAuth from '../hook/useAuth';

const DashboardPage = () => {
  const { user, logout} = useAuth();

  return (
    <>
      <Navbar />
      <div className="flex max-h-[calc(100vh-64px)] overflow-hidden">
        <Sidebar user={user} logout={logout}>
          <div className="overflow-y-auto h-full">
            <Routes>
              {dashboardRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
        </Sidebar>
      </div>



    </>
  )
}

export default DashboardPage