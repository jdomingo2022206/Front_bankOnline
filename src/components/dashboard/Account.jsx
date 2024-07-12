import { useForm } from 'react-hook-form';
import accountImg from '../../assets/img/account.jpg'
import useAccount from '../../hook/useAccount';
import useAuth from '../../hook/useAuth';
import Input from '../common/Input';
import { ComboBox } from '../common/ComboBox';

const AccountPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createAccount, loading } = useAccount();
    const { user } = useAuth();

    const options = [
        { value: 250, label: '250' },
        { value: 200, label: '200' },
        { value: 100, label: '100' },
    ];

    const onSubmit = (data) => {
        createAccount(data, reset)
    };

    return (
        <>
            <div className=" flex flex-col items-center justify-center overflow-y-scroll min-h-[calc(100vh-64px)] antialiased">
                <div className="w-full max-w-4xl flex">
                    <div className="hidden lg:block w-1/2 p-8">
                        <img src={accountImg} alt="Illustration" className="w-full h-auto" />
                    </div>
                    <div className="w-full lg:w-1/2 p-8">
                        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
                        <p className="text-center text-gray-600 mb-8">Fill in the details to create a new account</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <Input
                                    type="text"
                                    label="Insert The userID"
                                    name="idUser"
                                    color="text-gray-700"
                                    placeholder="ID to the User"
                                    register={register}
                                    rules={{ required: 'Enter de ID to the User' }}
                                    error={errors.salary}
                                />
                            </div>
                            <div className="mb-6">
                                <Input
                                    type="number"
                                    label="What is the salary"
                                    name="salary"
                                    color="text-gray-700"
                                    placeholder="(GTQ)"
                                    register={register}
                                    rules={{ required: 'Enter your salary' }}
                                    error={errors.salary}
                                />
                            </div>
                            <div className="mb-6">
                                <ComboBox
                                    label="Open the Account whit..."
                                    name="credit"
                                    placeholder="Select in GTQ"
                                    options={options}
                                    register={register}
                                    rules={{ required: 'This field is required' }}
                                    error={errors.credit}
                                    color="text-gray-700"
                                />
                            </div>

                            <div className="flex items-center mb-6">
                                <input type="checkbox" id="terms" {...register("terms", { required: true })} className="mr-2" />
                                <label htmlFor="terms" className="text-gray-700">I agree to the terms and conditions</label>
                                {errors.terms && <span className="text-red-500">This field is required</span>}
                            </div>

                            <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                {loading ? "Loading..." : " Create Account"}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AccountPage;