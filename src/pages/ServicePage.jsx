import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import { useForm } from 'react-hook-form';
import useService from '../hook/useService';
import { useSelector } from 'react-redux';

const ServicePage = () => {
    const services = [
        { id: 1, name: 'EEGSA', numberAccount: '2154800154', description: 'Pay your electricity bill', img: 'https://www.construguate.com/wp-content/uploads/2020/04/315.jpg' },
        { id: 2, name: 'EMPAGUA', numberAccount: '2015441020', description: 'Pay your water bill', img: 'https://lahora.gt/wp-content/uploads/sites/5/2020/05/Empagua.jpg' },
        { id: 3, name: 'TELGUA', numberAccount: '2015411201', description: 'Pay your phone bill', img: 'https://guateportsquetzal.com/wp-content/uploads/2019/06/logoClaro-358x184.png' },
        { id: 4, name: 'Tigo', numberAccount: '9874102115', description: 'Recharge your mobile phone', img: 'https://www.bitrefill.com/content/cn/b_rgb%3AFFFFFF%2Cc_pad%2Ch_720%2Cw_1280/v1676481894/tigo-bill-el-salvador-newlogo.webp' },
        { id: 5, name: 'SAT', numberAccount: '9154551244', description: 'Pay your taxes', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Logo_SAT_Guatemala.svg/2560px-Logo_SAT_Guatemala.svg.png' }
    ];

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [selectedService, setSelectedService] = useState(null);
    const [monto, setMonto] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { createTransfer } = useService();
    const user = useSelector((state) => state.user.user);

    // Efecto secundario para reiniciar monto cuando cambia selectedService
    useEffect(() => {
        setMonto(0);
    }, [selectedService]);

    const handleOpenModal = (service) => {
        setSelectedService(service);
        setMonto(generateRandomAmount());
        document.getElementById('my_modal_1').showModal();
    };

    const generateRandomAmount = () => {
        return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    };

    const onUniqueFieldChange = (e) => {
        if (e.target.value.trim() !== '') {
            setMonto(generateRandomAmount());
        } else {
            setMonto(0);
        }
    };

    const onSubmit = async (data) => {
        if (!user || !user.accounts || user.accounts.length === 0) {
            console.error('User account information missing');
            return;
        }

        const transferData = {
            sourceAccount: user.accounts[0],
            destinationAccount: selectedService.numberAccount,
            amount: monto,
            description: `Payment for ${selectedService.name}`
        };

        await createTransfer(transferData);
        setFormSubmitted(true);
    };

    const closeModal = () => {
        document.getElementById('my_modal_1').close();
        reset(); // Limpiar el formulario después de cerrar el modal
        setMonto(0); // Reiniciar el estado de monto
        setFormSubmitted(false); // Reiniciar el estado del formulario enviado
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center py-10">
                {services.map(service => (
                    <div key={service.id} className="bg-gray-800 text-white rounded-2xl w-96 shadow-xl m-4 overflow-hidden">
                        <figure className="flex justify-center items-center h-64 px-10 pt-10">
                            <img
                                src={service.img}
                                alt={service.name}
                                className="rounded-xl max-h-full"
                            />
                        </figure>
                        <div className="bg-white text-gray-800 card-body items-center text-center p-6 rounded-b-2xl">
                            <h2 className="card-title">{service.name}</h2>
                            <p>{service.description}</p>
                            <div className="card-actions mt-4">
                                <button
                                    onClick={() => handleOpenModal(service)}
                                    className="btn bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg text-gray-800">Payment for {selectedService?.name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <div className="modal-content">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="uniqueField">
                                    {selectedService?.name === 'TELGUA' ? 'Phone Number' : selectedService?.name === 'Tigo' ? 'Mobile Number' : selectedService?.name === 'SAT' ? 'NIT' : 'Counter number'}
                                </label>
                                <input
                                    type={selectedService?.name === 'TELGUA' || selectedService?.name === 'Tigo' ? 'tel' : 'text'}
                                    id="uniqueField"
                                    {...register("uniqueField", { required: true })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={onUniqueFieldChange}
                                />
                                {errors.uniqueField && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="monto">
                                    Amount payable (quetzales)
                                </label>
                                <input
                                    type="text"
                                    id="monto"
                                    value={monto}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="modal-action">
                                <button
                                    className="btn bg-gray-400 hover:bg-gray-300 text-black px-6 py-2 rounded-md"
                                    onClick={closeModal} // Utiliza closeModal para cerrar el modal y limpiar el estado
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md"
                                >
                                    Confirm Payment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default ServicePage;
