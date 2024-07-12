import React, { lazy } from 'react';
import PrivateRoute from '../routes/PrivateRoutes.jsx';
import PrivateRouteAdmin from '../routes/PrivateRoutesAdmin.jsx';

const Account = lazy(() => import('../components/dashboard/Account.jsx'));
const TransferAccount = lazy(() => import('../components/dashboard/TransferAccount.jsx'));
const Accounts = lazy(() => import('../components/dashboard/Accounts.jsx'));
const Service = lazy(() => import('../components/dashboard/Service.jsx'));
const Enterprise = lazy(() => import('../components/dashboard/RegisterEnterprise.jsx'))
const RegisterPage = lazy(() => import('../components/dashboard/RegisterPage.jsx'))
const Deposit = lazy(() => import('../components/dashboard/Deposit.jsx'))
const Favorite = lazy(() => import('../components/dashboard/Favorite.jsx'))
const EditProfile = lazy(() => import('../components/dashboard/EditProfile.jsx'))
const Credit = lazy(() => import('../components/dashboard/Credit.jsx'))
const DetailsAccount = lazy(() => import('../components/dashboard/DetailsAccount.jsx'))
const Management = lazy(() => import('../components/dashboard/ManagementUser.jsx'))
const TransferHistory = lazy(() => import('../components/dashboard/TransferHistory.jsx'))

const dashboardRoutes = [
    { path: '/', element: <PrivateRoute element={<Credit />} />  },
    { path: '/accounts', element: <PrivateRouteAdmin element={<Accounts />}/> },
    { path: '/create-account', element: <Account />},
    { path: '/create-user', element: <RegisterPage /> },
    { path: '/transfer', element: <PrivateRoute element={<TransferAccount />} />},
    { path: '/transaction-history', element: <PrivateRoute element={<TransferHistory />} />},
    { path: '/services', element: <PrivateRoute element={<Service />} />},
    { path: '/deposit', element: <PrivateRoute element={<Deposit />} />},
    { path: '/favorite', element: <PrivateRoute element={<Favorite />} />},
    { path: '/enterprise', element: <PrivateRoute element={<Enterprise />} />},
    { path: '/edit-profile', element: <PrivateRoute element={<EditProfile />} />},
    { path: '/management-users', element: <PrivateRouteAdmin element={<Management />} />},
    {path:'/accounts/details/:id', element: <PrivateRoute element={<DetailsAccount />} />}
]

export default dashboardRoutes;