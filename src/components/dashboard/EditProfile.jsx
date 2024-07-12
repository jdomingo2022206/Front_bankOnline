import { useForm } from 'react-hook-form';
import Input from '../common/Input';
import useUser from '../../hook/useUser';
import useAuth from '../../hook/useAuth';
import { useEffect } from 'react';

const EditProfile = () => {
    const { register: formRegister, handleSubmit, formState: { errors }, setValue } = useForm();
    const { edit } = useUser();
    const { user } = useAuth();
    console.log("🚀 ~ EditProfile ~ user:", user)

    useEffect(() => {
        if (user) {
            setValue('userName', user.userName);
            setValue('email', user.email);
            setValue('phone', user.phone);
        }
    }, [user, setValue]);

    const onSubmit = (data) => {
        console.log("🚀 ~ onSubmit ~ data:", data);
        edit(data);
    };

    return (
        <div className="py-5 flex items-center justify-center ">
            <div className="bg-gray-200 p-8 rounded-lg max-w-xl w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Edit profile</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="mb-4 flex space-x-4">
                        <div className="w-1/2">
                            <Input
                                type="password"
                                label="Password"
                                name="pass"
                                color="text-gray-700"
                                placeholder="Enter new password"
                                register={formRegister}
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
                    <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none">Update profile</button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
