import { useForm } from 'react-hook-form';
import Input from '../common/Input.jsx';
import transferImg from '../../assets/img/transfer.jpg'
import { ComboBox } from '../common/ComboBox.jsx';
import useTransaction from '../../hook/useTransaction.js';
import useAuth from '../../hook/useAuth.js';

const TransferAccount = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { transfer } = useTransaction();
    const { user } = useAuth();

    const onSubmit = (data) => {
        data.idUser = user.id;
        console.log("Lo que se va: ", data);
        transfer(data, reset);
    };

    const accounts = user.accounts;
    const options = accounts.map(account => {
        return { value: account, label: `${account}` };
    });

    return (
        <>
            <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
                <div className=" w-full max-w-4xl flex flex-col lg:flex-row">
                    <div className="w-full p-2 flex items-center justify-center">
                        <img src={transferImg} alt="Illustration" className="w-full h-auto max-w-sm object-center object-cover" />
                    </div>
                    <div className="w-full p-8 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Transfer Funds</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            <div className="mb-6">
                                <ComboBox
                                    label="My account"
                                    name="sourceAccount"
                                    placeholder="Select your account to transfer"
                                    options={options}
                                    register={register}
                                    rules={{ required: 'This field is required' }}
                                    error={errors.sourceAccount}
                                    color="text-gray-700"
                                />
                            </div>
                            <div className="mb-6">
                                <Input
                                    type="number"
                                    label="Destination Account"
                                    name="destinationAccount"
                                    color="text-gray-700"
                                    placeholder="Numbers"
                                    register={register}
                                    rules={{ required: 'Enter the destination account' }}
                                    error={errors.destinationAccount}
                                />
                            </div>
                            <div className="mb-6">
                                <Input
                                    type="number"
                                    label="Enter the amount to transfer"
                                    name="amount"
                                    color="text-gray-700"
                                    placeholder="(GTQ)"
                                    register={register}
                                    rules={{ required: 'Enter the amount to transfer' }}
                                    error={errors.amount}
                                />
                            </div>
                            <div className="mb-6">

                                <Input
                                    type="text"
                                    label="Enter the description of the transfer"
                                    name="description"
                                    color="text-gray-700"
                                    placeholder="Description"
                                    register={register}
                                    rules={{ required: 'Enter the description' }}
                                    error={errors.description}
                                />

                            </div>
                            <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">Transfer</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransferAccount;
