import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Input = ({ label, name, type, placeholder, rules, register, error, color }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <label className={`block ${color} font-bold mb-2`} htmlFor={name}>{label}</label>
            <div className="relative">
                <input
                    id={name}
                    type={showPassword ? 'text' : type}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder={placeholder}
                    {...register(name, rules)}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-4 flex items-center text-gray-600"
                    >
                        {showPassword ? <FaRegEyeSlash size={24} /> : <FaRegEye size={24} />}
                    </button>
                )}
            </div>
            {error && (
                <span className="text-red-500 text-sm font-semibold mt-1">{error.message}</span>
            )}
        </>
    );
};

export default Input;