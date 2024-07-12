import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MdDelete } from "react-icons/md";
import Input from '../common/Input.jsx';
import useFavorite from '../../hook/useFavorite.js'

const Favorite = () => {
    const [showForm, setShowForm] = useState(false); 
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { favorites, addFavorite, deleteFavorite, loading } = useFavorite();

    const onSubmit = (data) => {
        addFavorite(data);
        reset();  
        setShowForm(false); 
    };

    return (
        <>
            <div className="flex items-start justify-center mt-4 mb-20">
                <div className="bg-white p-8 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-1/2">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Favorite List</h2>
                    <ul>
                        {favorites.map(fav => (
                            <li key={fav._id} className="mb-2 border-b pb-2 bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <p><strong>Alias:</strong> {fav.alias}</p>
                                <p><strong>Number Account:</strong> {fav.numberAccount}</p>
                                <p><strong>DPI Favorite:</strong> {fav.DPIFavorite}</p>
                                <p><strong>DPI Personal:</strong> {fav.DPIPersonal}</p>
                                <button
                                    onClick={() => deleteFavorite(fav._id)}
                                    className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-700 focus:outline-none mt-2 flex items-center"
                                >
                                    <MdDelete className="mr-1" /> Delete
                                </button>
                            </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="ml-8">
                    <div className="bg-gray-200 p-8 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] max-w-md w-full">
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Favorite</h2>
                        {!showForm && (
                            <button
                                onClick={() => setShowForm(true)}
                                className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none mb-6"
                            >
                                Show Form
                            </button>
                        )}
                        {showForm && (
                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        label="Number Account"
                                        name="numberAccount"
                                        color="text-gray-700"
                                        placeholder="Enter the number account"
                                        register={register}
                                        rules={{ required: 'Number account is required' }}
                                        error={errors.numberAccount}
                                    />
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        label="DPI Favorite"
                                        name="DPIFavorite"
                                        color="text-gray-700"
                                        placeholder="Enter the DPI of favorite"
                                        register={register}
                                        rules={{ required: 'DPI favorite is required' }}
                                        error={errors.DPIFavorite}
                                    />
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        label="DPI Personal"
                                        name="DPIPersonal"
                                        color="text-gray-700"
                                        placeholder="Enter your DPI"
                                        register={register}
                                        rules={{ required: 'DPI personal is required' }}
                                        error={errors.DPIPersonal}
                                    />
                                </div>
                                <div className="mb-4">
                                    <Input
                                        type="text"
                                        label="Alias"
                                        name="alias"
                                        color="text-gray-700"
                                        placeholder="Enter an alias"
                                        register={register}
                                        rules={{ required: 'Alias is required' }}
                                        error={errors.alias}
                                    />
                                </div>

                                <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none">
                                    {loading ? "Loading.." : "Add Favorite"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Favorite;
