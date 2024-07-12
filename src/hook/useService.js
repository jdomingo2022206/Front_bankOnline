import { useCreateTransferMutation } from '../services/serviceApi';
import toast from 'react-hot-toast';

const useService = () => {
    const [createTransfer] = useCreateTransferMutation();

    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';
        toast.error(errorMessage);
    };

    const handleCreateTransfer = async (data) => {
        try {
            await createTransfer(data).unwrap();
            toast.success('Transfer Successful');
        } catch (err) {
            handleError(err);
        }
    };

    return {
        createTransfer: handleCreateTransfer,
    };
};

export default useService;
