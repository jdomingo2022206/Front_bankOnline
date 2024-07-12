import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

const TransferDetail = ({ transaction }) => {
    const { amount, description, destinationAccount, sourceAccount, type, createdAt } = transaction;

    const formattedDate = format(new Date(createdAt), 'yyyy-MM-dd');
    const formattedTime = format(new Date(createdAt), 'HH:mm:ss');
    const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: enUS });

    return (
        <div className='mt-2'>
            <div className="collapse bg-base-200 rounded-lg shadow-md">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    <strong>{type}</strong> <span className="text-sm text-gray-500">({timeAgo})</span>
                </div>
                <div className="collapse-content">
                    <p><strong>Amount:</strong> {amount}</p>
                    {sourceAccount && <p><strong>Description:</strong> {description}</p>}
                    <p><strong>Destination Account:</strong> {destinationAccount}</p>
                    <p><strong>Date:</strong> {formattedDate}</p>
                    <p><strong>Time:</strong> {formattedTime}</p>
                </div>
            </div>
        </div>
    );
};

export default TransferDetail;
