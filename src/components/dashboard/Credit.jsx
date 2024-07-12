import React, { useEffect, useState } from 'react';
import useUser from '../../hook/useUser';
import useAuth from '../../hook/useAuth';
import { CardCredit } from '../common/CardCredit';
import axios from 'axios';

const Credit = () => {
    const { user } = useAuth();
    const userId = user?.id || user?._id; // Handle both cases for user ID
    const { getUserById } = useUser();
    const { data, isLoading, refetch } = getUserById(userId); // Pass the correct userId
    const [targetCurrency, setTargetCurrency] = useState('USD');
    const [convertedCredits, setConvertedCredits] = useState({});
    const [commonCurrencies, setCommonCurrencies] = useState([

        ['USD', 'United States Dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'British Pound'],
        ['JPY', 'Japanese Yen'],
        ['CAD', 'Canadian Dollar'],
        ['AUD', 'Australian Dollar'],
        ['CHF', 'Swiss Franc'],
        ['CNY', 'Chinese Yuan'],
        ['HKD', 'Hong Kong Dollar'],
        ['NZD', 'New Zealand Dollar'],
        ['GTQ', 'Guatemalan Quetzal'],
    ]);

    useEffect(() => {
        if (userId) {
            refetch();
        }
    }, [refetch, userId]);

    useEffect(() => {
        if (data) {
            data.forEach(user => {
                user.accounts.forEach(account => {
                    convertCurrency(account.credit, targetCurrency, account.numberAccount);
                });
            });
        }
    }, [data, targetCurrency]);

    const apiKey = "a8b99b296810c0bcb79872eb";

    const convertCurrency = async (amount, targetCurrency, accountNumber) => {
        try {
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/GTQ/${targetCurrency}/${amount}`);
            setConvertedCredits(prevState => ({
                ...prevState,
                [accountNumber]: response.data.conversion_result
            }));
        } catch (error) {
            console.error('Error al realizar la conversión de divisas', error);
        }
    };

    if (isLoading) return <div>cargando</div>;

    return (
        <div className='flex flex-col items-center my-6'>
            <div className="w-full px-6 mb-6">
                <div className="mt-6">
                    <h2 className="text-gray-600">Welcome back,</h2>
                    <h2 className="text-2xl font-semibold text-gray-900">{`${user?.name} ${user?.lastName}`}</h2>
                </div>
            </div>

            <div className="mb-6">
                <label className="block mb-2 text-gray-600">Moneda objetivo:</label>
                <select
                    value={targetCurrency}
                    onChange={(e) => setTargetCurrency(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded"
                >
                    {commonCurrencies.map(([code, name]) => (
                        <option key={code} value={code}>{name} ({code})</option>
                    ))}
                </select>
            </div>

            <div className="w-full max-w-lg px-6">
                {data?.map((user, userIndex) =>
                    user.accounts?.map((account, accountIndex) => (
                        <CardCredit
                            key={`${userIndex}-${accountIndex}`}
                            account={account}
                            user={user}
                            index={accountIndex}
                            convertedCredit={convertedCredits[account.numberAccount]}
                            targetCurrency={targetCurrency}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Credit;
