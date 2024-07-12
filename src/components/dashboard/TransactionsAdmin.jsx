import React, { useState, useEffect } from 'react';
import useTransaction from '../../hook/useTransaction';
import useAuth from '../../hook/useAuth';
import { format } from 'date-fns';

const TransactionsAdmin = () => {
    const { user } = useAuth();
    const { createDeposit, loading, getAdminTransactionsUse, revert } = useTransaction();
    const { data, isLoading, refetch } = getAdminTransactionsUse(user.id);

    useEffect(() => {
        refetch();
    }, [refetch]);

    const handleRevert = async (id) => {
        console.log("Revert transaction with id: ", id);
        await revert(id);
        await refetch();
    }

    if (isLoading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <div className="p-2 mb-50">
            <div className='mb-6'>
                <h1 className='text-center font-bold text-4xl'>Deposits with my</h1>
            </div>
            <div className="bg-white rounded-3xl max-w-7xl w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mx-auto">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Destination Account</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(-5).reverse().map((transaction, index) => {
                                const formattedDate = format(new Date(transaction.date), 'dd-MM-yyyy');
                                return (
                                    <tr key={index}>
                                        <td>{transaction.destinationAccount}</td>
                                        <td>{formattedDate}</td>
                                        <td>{transaction.amount}</td>
                                        <td>
                                            <button onClick={() => handleRevert(transaction._id)} className="btn bg-red-400 text-gray-100">Revert</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TransactionsAdmin;
