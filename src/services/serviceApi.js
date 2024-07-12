import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        createTransaction: builder.mutation({
            query: (data) => ({
                url: 'transaction/new',
                method: 'POST',
                body: data,
            }),
        }),
        createTransfer: builder.mutation({
            query: (data) => ({
                url: 'transaction/transfer',
                method: 'POST',
                body: data,
            }),
        }),
        getAllMyTransactions: builder.query({
            query: () => ({
                url: 'transaction/my-transactions',
                method: 'GET',
            }),
        }),
    }),
});

export const { useCreateTransactionMutation, useCreateTransferMutation, useGetAllMyTransactionsQuery } = serviceApi;
