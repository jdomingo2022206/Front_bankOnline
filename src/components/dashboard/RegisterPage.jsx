import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../common/Input';
import { ComboBox } from '../common/ComboBox';
import useAuth from '../../hook/useAuth';

const RegisterPage = () => {
    const { register: formRegister, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const { register } = useAuth();
    const { userCreated } = useSelector((state) => state.userCreated);
    console.log("🚀 ~ RegisterPage ~ userCreated:", userCreated)

    const options = [
        { value: "ADMIN", label: 'Client' },
        { value: "CLIENT", label: 'Admin' },
        { value: "ENTERPRISE", label: 'Enterprise' },
    ];

    const onSubmit = (data) => {
        register(data, reset)
        console.log(data);
    };

    return (
        <>
            <div className="py-5 flex items-center justify-center content-center">
                <div className="bg-gray-200 p-8 rounded-lg max-w-xl w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">New E-Bank user</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <Input
                                type="number"
                                label="DPI"
                                name="DPI"
                                color="text-gray-700"
                                placeholder="Enter the DPI"
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
                                    placeholder="Enter the name"
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
                                    placeholder="Enter the last name"
                                    register={formRegister}
                                    rules={{ required: 'Last Name is required' }}
                                    error={errors.lastName}
                                />
                            </div>
                        </div>
                        <div className="mb-4 flex space-x-4">

                            <div className="w-1/2">
                                <Input
                                    type="text"
                                    label="Username"
                                    name="userName"
                                    color="text-gray-700"
                                    placeholder="Enter the username"
                                    register={formRegister}
                                    rules={{ required: 'Username is required' }}
                                    error={errors.userName}
                                />
                            </div>
                            <div className="w-1/2">
                                <Input
                                    type="email"
                                    label="Email"
                                    name="email"
                                    color="text-gray-700"
                                    placeholder="Enter the email"
                                    register={formRegister}
                                    rules={{ required: 'Email is required' }}
                                    error={errors.email}
                                />
                            </div>
                        </div>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <Input
                                    type="password"
                                    label="Password"
                                    name="pass"
                                    color="text-gray-700"
                                    placeholder="Enter the password"
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
                                    placeholder="Enter the phone number"
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
                                placeholder="Enter the address"
                                register={formRegister}
                                rules={{ required: 'Address is required' }}
                                error={errors.address}
                            />
                        </div>
                        <div className="mb-6 flex space-x-4">
                            <div className="w-1/2">
                                <Input
                                    type="text"
                                    label="Job Name"
                                    name="jobName"
                                    color="text-gray-700"
                                    placeholder="Enter the job name"
                                    register={formRegister}
                                    rules={{ required: 'Job Name is required' }}
                                    error={errors.jobName}
                                />
                            </div>
                            <div className="w-1/2">
                                <ComboBox
                                    label="Role"
                                    color="text-gray-700"
                                    placeholder="Assign a role"
                                    name={"role"}
                                    register={formRegister}
                                    error={errors.role}
                                    rules={{ required: 'Role is required' }}
                                    options={options}
                                />
                            </div>
                        </div>


                        <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none">Create the account</button>
                    </form>
                </div>

                <div className="bg-gray-100 p-8 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ml-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">ID of last created user</h2>
                    <ul className="list-disc list-inside">
                        {

                            <li className="text-gray-700">{userCreated}</li>

                        }
                    </ul>
                </div>
            </div>
            <br />
            <br />
        </>

    );
};

export default RegisterPage;
