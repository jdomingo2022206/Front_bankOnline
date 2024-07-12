import React, { useEffect } from 'react';
import useUser from '../../hook/useUser';
import { useParams } from 'react-router-dom';
import useAccount from '../../hook/useAccount';
import { format } from 'date-fns';

import { Link } from 'react-router-dom';

const DetailsAccount = () => {
    const { id } = useParams();
    const { getAccountDetails } = useAccount();
    const { data, isLoading, refetch } = getAccountDetails(id);




    useEffect(() => {
        refetch();
    }, [refetch]);

    if (isLoading) {
        return <div>Loading...</div>;

    }

    if (!data) {
        return <div>No data available</div>;
    }

    console.log(data);

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Account Details</h1>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">
                        <span className="font-semibold">Owner: </span>
                        <span>{data.user.name + " " + data.user.lastName}</span>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md">
                        <span className="font-semibold">Account Number: </span>
                        <span>{data.account.numberAccount}</span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md">
                        <span className="font-semibold">Credit: </span>
                        <span>Q {data.account.credit}</span>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b">Type Transaction</th>
                                <th className="px-4 py-2 border-b">Description</th>
                                <th className="px-4 py-2 border-b">Amount</th>
                                <th className="px-4 py-2 border-b">Source Account</th>
                                <th className="px-4 py-2 border-b">Destination Account</th>
                                <th className="px-4 py-2 border-b">Date and hour</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.transactions.length == 0 ? (
                                    <>
                                        <tr>
                                            <td></td>
                                            <td className="px-5 py-4 border-b text-red-800" colSpan="4">
                                                No transactions available
                                            </td>
                                        </tr>
                                    </>
                                ) : (
                                    data.transactions.slice(-5).reverse().map((transaction, index) => {
                                        const formattedDate = format(new Date(transaction.date), 'dd-MM-yyyy HH:mm');
                                        const accountNumber = data.account.numberAccount; // Reemplaza con el número de cuenta correcto
                                        console.log("SourceAccount: ", transaction.destinationAccount);
                                        let textColor;
                                        if (transaction.destinationAccount == accountNumber) {
                                            textColor = "text-green-800"
                                        } else {
                                            textColor = "text-red-800"
                                        }

                                        return (
                                            <tr key={index}>
                                                <td className={`px-4 py-2 border-b ${textColor}`}>
                                                    {transaction.type}
                                                </td>
                                                <td className={`px-4 py-2 border-b ${textColor}`}>
                                                    {transaction.description}
                                                </td>
                                                <td className={`px-4 py-2 border-b ${textColor}`}>
                                                    {transaction.amount}
                                                </td>
                                                <td className={`px-4 py-2 border-b ${textColor}`}>
                                                    {
                                                        transaction.sourceAccount == accountNumber ? "This Account" : transaction.sourceAccount
                                                    }
                                                </td>
                                                <td className={`px-4 py-2 border-b ${textColor}`}>
                                                    {
                                                        transaction.destinationAccount == accountNumber ? "This Account" : transaction.destinationAccount
                                                    }
                                                </td>
                                                <td className={`px-4 py-2 border-b ${textColor}`}>
                                                    {formattedDate}
                                                </td>
                                            </tr>
                                        );
                                    })
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DetailsAccount;
