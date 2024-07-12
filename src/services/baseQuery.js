import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/bank/v1',
    prepareHeaders: (headers, { getState }) => {
        const state = getState();
        const { token } = state.user || {};

        if (token) {

            headers.set('token', `${token}`);
        } else {
            console.warn('No token found in state');
        }
        return headers;
    },
});

export default baseQuery;