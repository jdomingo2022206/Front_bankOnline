import React, { useEffect } from 'react';
import TransferDetail from '../common/TransferDetail';
import useTransaction from '../../hook/useTransaction';
import useAuth from '../../hook/useAuth';
import { useForm } from 'react-hook-form';
import { ComboBox } from '../common/ComboBox';

const TransferHistory = () => {
    const { user } = useAuth();
    const { register, watch } = useForm();

    const accounts = user.accounts;
    const options = accounts.map(account => {
        return { value: account, label: `${account}` };
    });
    const accountNumber = watch('accountNumber');
    
    const { getTransfersByUser } = useTransaction();
    const { data, isLoading, refetch } = getTransfersByUser(accountNumber);

    useEffect(() => {
        if (accountNumber) {
            refetch();
        }
    }, [accountNumber, refetch]);

    return (
        <>
            <div className="flex justify-center">
                <div className='py-12 mb-24 max-w-2xl w-full'>
                    <ComboBox
                        rules={{ required: 'this is required' }}
                        register={register}
                        name={"accountNumber"}
                        label={'List history'}
                        placeholder={'Select your account to view your history'}
                        options={options}
                    />

                    <div className='mt-10'>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            data && data.length > 0 ? (
                                data.map((transaction) => (
                                    <TransferDetail key={transaction._id} transaction={transaction} />
                                ))
                            ) : (
                                <p className='text-center'>No transfer history available for this account.</p>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransferHistory;
