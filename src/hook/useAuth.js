import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from '../services/userApi';
import { setCredentials, clearCredentials } from '../feature/userSlice';
import { setUserCreated, clearUserCreated, updateUserCreated } from '../feature/userCreatedSlice';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading: isLoadingLogin }] = useLoginMutation();
    const [register, { isLoading: isLoadingRegister }] = useRegisterMutation();
    const { isAuthenticated, user } = useSelector((state) => state.user);

    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';
        toast.error(errorMessage);
    };

    const handlerLogin = async (data) => {
        try {
            const loginRequest = await login(data).unwrap();            
            console.log(loginRequest.user.role=='ADMIN')
            if(loginRequest.user.role=='ADMIN'){
                navigate('/dashboard/accounts');
            }else{
                navigate('/dashboard/');
            }
            dispatch(setCredentials(loginRequest));
            toast.success('Successfully logged in');
        } catch (err) {
            handleError(err);
        }
    };

    const handlerRegister = async (data, reset) => {
        try {
            const dataToRegister = await register(data).unwrap();
            console.log("Data to register -->");
            console.dir(dataToRegister.userDetails.id);
            const userCreated = dataToRegister.userDetails.name + " | " + dataToRegister.userDetails.id;
            dispatch(updateUserCreated(userCreated));
            reset();
            toast.success('You have successfully registered');
        } catch (err) {
            handleError(err);
        }
    };

    const handlerLogout = () => {
        dispatch(clearCredentials());
        navigate('/');
    };

    return {
        login: handlerLogin,
        register: handlerRegister,
        logout: handlerLogout,
        loading: isLoadingLogin || isLoadingRegister,
        isAuthenticated,
        user
    };
};

export default useAuth;