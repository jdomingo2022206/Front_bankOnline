import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import useAuth from '../../hook/useAuth';

const RegisterPage = () => {
    const { register: formRegister, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const { register } = useAuth();

    const onSubmit = (data) => {
        data.role = 'ENTERPRISE'
        register(data, reset)
        console.log(data);
    };

    return (
        <>
            <div className="py-5 flex  items-center justify-center mb-20 content-center">
                <div className="bg-gray-200 p-8 rounded-lg max-w-xl w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register enterprise</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <Input
                                type="number"
                                label="DPI"
                                name="DPI"
                                color="text-gray-700"
                                placeholder="Enter the company's DPI"
                                register={formRegister}
                                rules={{
                                    required: 'DPI is required',
                                    minLength: {
                                        value: 13,
                                        message: 'DPI must be exactly 13 characters'
                                    },
                                    maxLength: {
                                        value: 13,
                                        message: 'DPI must be exactly 13 characters'
                                    }
                                }}
                                error={errors.DPI}
                            />
                        </div>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <Input
                                    type="text"
                                    label="Name"
                                    name="name"
                                    color="text-gray-700"
                                    placeholder="Enter the company's name"
                                    register={formRegister}
                                    rules={{ required: 'Name is required' }}
                                    error={errors.name}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    type="text"
                                    label="Last Name"
                                    name="lastName"
                                    color="text-gray-700"
                                    placeholder="Enter the representative's last name"
                                    register={formRegister}
                                    rules={{ required: 'Last Name is required' }}
                                    error={errors.lastName}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <Input
                                type="text"
                                label="Username"
                                name="userName"
                                color="text-gray-700"
                                placeholder="Enter the company's username"
                                register={formRegister}
                                rules={{ required: 'Username is required' }}
                                error={errors.userName}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                color="text-gray-700"
                                placeholder="Enter the company's email"
                                register={formRegister}
                                rules={{ required: 'Email is required' }}
                                error={errors.email}
                            />
                        </div>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <Input
                                    type="password"
                                    label="Password"
                                    name="pass"
                                    color="text-gray-700"
                                    placeholder="Enter a password"
                                    register={formRegister}
                                    rules={{ required: 'Password is required' }}
                                    error={errors.pass}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    type="text"
                                    label="Phone"
                                    name="phone"
                                    color="text-gray-700"
                                    placeholder="Enter the company's phone number"
                                    register={formRegister}
                                    rules={{ required: 'Phone is required' }}
                                    error={errors.phone}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <Input
                                type="text"
                                label="Address"
                                name="address"
                                color="text-gray-700"
                                placeholder="Enter the company's address"
                                register={formRegister}
                                rules={{ required: 'Address is required' }}
                                error={errors.address}
                            />
                        </div>
                        <div className="mb-6">
                            <Input
                                type="text"
                                label="Job Name"
                                name="jobName"
                                color="text-gray-700"
                                placeholder="Enter what the company does"
                                register={formRegister}
                                rules={{ required: 'Job Name is required' }}
                                error={errors.jobName}
                            />
                        </div>
                        <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none">Sign up</button>
                    </form>
                    <div className="text-center mt-6">
                        <p className="text-gray-600">Already a member? <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
