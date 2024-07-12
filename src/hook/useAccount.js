import { useCreateMutation, useDetailsQuery } from '../services/accountApi';
import toast from 'react-hot-toast';

const useAccount = () => {
    //const navigate = useNavigate();

    const [createAccount] = useCreateMutation();


    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';
        toast.error(errorMessage);
    };

    const handlerCreateAccount = async (data, reset) => {
        try {
            console.dir(data);   //DEBUG
            await createAccount(data)
            reset();
            //navigate('/'); //Aquí va el Dashboard de la cuenta bancaria
            toast.success('Account Created Successfully');
        } catch (err) {
            handleError(err);
        }
    }

    const getAccountDetails = (id) => {
        try {
            const { data, error, isLoading, refetch } = useDetailsQuery(id);
            if (error) handleError(error);
            return { data, isLoading, refetch };
        } catch (err) {
            handleError(err);
        }
    }

    return {
        createAccount: handlerCreateAccount,
        getAccountDetails
    }

}

export default useAccount;