import React from 'react';

export const CardCredit = ({ user, account, index, convertedCredit, targetCurrency }) => {
    return (
        <>
            <div className="bg-blue-50 p-4 mb-4 rounded-lg shadow">
                <h3 className="text-gray-700">No. Account {index + 1}</h3>
                <p className="text-sm text-gray-500">Account Number: {account.numberAccount}</p>
                <p className="text-2xl font-bold text-green-600">Q{account.credit}</p>
                {convertedCredit && (
                    <p className="text-2xl font-bold text-blue-600">
                        {convertedCredit} {targetCurrency}
                    </p>
                )}
            </div>
        </>
    );
}
