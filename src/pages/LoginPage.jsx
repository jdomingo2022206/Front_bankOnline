import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import useAuth from '../hook/useAuth';
import Input from '../components/common/Input';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, loading } = useAuth();

    const onSubmit = (data) => {
        console.log("HOLA");
        login(data)
    }; 

    return (
        <>
            <Navbar />
            <div className="-mt-4 min-h-[calc(100vh-64px)] flex items-center justify-center content-center">
                <div className="bg-gray-200 p-8 rounded-lg max-w-md w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign in</h2>
                    <p className="text-center text-gray-600 mb-6">Join the community today!</p>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="mb-4">
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                color="text-gray-700"
                                placeholder="Enter your email"
                                register={register}
                                rules={{ required: 'Email is required' }}
                                error={errors.email}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                type="password"
                                label="Password"
                                name="pass"
                                color="text-gray-700"
                                placeholder="Enter your password"
                                register={register}
                                rules={{ required: 'Password is required' }}
                                error={errors.pass}
                            />
                        </div>

                        <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none">
                            {loading ? "Loading.." : "Sign in"}
                        </button>
                    </form>
                    <div className="text-center mt-6">
                        <p className="text-gray-600">Not a member yet? <Link to="/register" className="text-blue-600 hover:underline">Sign up here</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;