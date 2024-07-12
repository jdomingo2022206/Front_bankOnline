import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = ({ children, user, logout }) => {

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                <div className="drawer-content min-h-[calc(100vh-64px)]">
                    {children}
                </div>
                <div className="drawer-side font-bold ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu menu-lg min-h-full w-80 p-5 space-y-3 ">
                        {user && user.role === 'ADMIN' && (
                            <>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/accounts'>Accounts</Link></li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/management-users'>Management users</Link></li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/create-user'>Create a user account</Link></li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/create-account'>Create a bank account</Link></li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/deposit'>Deposit Money</Link></li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/enterprise'>Register Enterprise</Link></li>
                            </>
                        )}
                        {user && user.role === 'CLIENT' && (
                            <>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/'>My Credit</Link></li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/transaction-history'>Activity</Link> </li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/favorite'>Favorite</Link> </li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/transfer'>Transfer</Link> </li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/services'>Pay for services</Link></li>
                                <li className='border-l-2 border-violet-800'><Link to='/dashboard/edit-profile'>Edit Profile</Link></li>

                            </>
                        )}
                        <li className='border-l-2 border-violet-800'><button onClick={logout}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
