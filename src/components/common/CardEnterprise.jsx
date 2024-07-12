import React from 'react'

export const CardEnterprise = () => {
    return (
        <div  className="bg-gray-800 text-white rounded-2xl w-96 shadow-xl m-4 overflow-hidden">
            <figure className="flex justify-center items-center h-64 px-10 pt-10">
                <img
                    src=""
                    alt=""
                    className="rounded-xl max-h-full"
                />
            </figure>
            <div className="bg-white text-gray-800 card-body items-center text-center p-6 rounded-b-2xl">
                <h2 className="card-title">service.name</h2>
                <p>service.description</p>
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
    )
}
