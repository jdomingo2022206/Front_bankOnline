import { useForm } from 'react-hook-form';
import { ComboBox } from '../common/ComboBox';
import { useEffect } from 'react';
import Input from '../common/Input';
import useTransaction from '../../hook/useTransaction.js';
import useAuth from '../../hook/useAuth.js';
import TransactionsAdmin from './TransactionsAdmin.jsx';

const Deposit = () => {

    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createDeposit, loading, getAdminTransactionsUse } = useTransaction();

    useEffect(() => {

    }, []);

    const onSubmit = (data) => {
        data.adminId = user.id;
        createDeposit(data, reset)
    };

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <>
            <div className=" flex flex-col items-center justify-center overflow-y-scroll min-h-[calc(100vh-64px)] antialiased">
                <div className="w-full max-w-4xl flex">
                    <div className="hidden lg:block w-1/2 p-0">

                        <TransactionsAdmin />

                    </div>
                    <div className="w-full lg:w-1/2 p-8">
                        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">To Deposit</h2>
                        <p className="text-center text-gray-600 mb-8">Complete the fields to make the deposit</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <Input
                                    type="text"
                                    label="Insert The account number"
                                    name="destinationAccount"
                                    color="text-gray-700"
                                    placeholder="Type eight digits"
                                    register={register}
                                    rules={{ required: 'Enter the account number' }}
                                    error={errors.numberAccount}
                                />
                            </div>
                            <div className="mb-6">
                                <Input
                                    type="number"
                                    label="Amount to deposit"
                                    name="amount"
                                    color="text-gray-700"
                                    placeholder="(GTQ)"
                                    register={register}
                                    rules={{ required: 'Enter the amount' }}
                                    error={errors.amount}
                                />
                            </div>

                            <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                {loading ? "Loading..." : "Deposit Money"}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );

}

export default Deposit;