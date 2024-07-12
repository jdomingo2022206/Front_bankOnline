import React from 'react';

export const ComboBox = ({ label, name, placeholder, options, register, rules, error, color }) => {
    const selectProps = register ? register(name, rules) : {};

    return (
        <>
            <label className={`block ${color} font-bold mb-2`} htmlFor={name}>{label}</label>
            <div className="relative">
                <select
                    id={name}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...selectProps}
                >
                    <option value="">{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {error && (
                <span className="text-red-500 text-sm font-semibold mt-1">{error.message}</span>
            )}
        </>
    );
};
