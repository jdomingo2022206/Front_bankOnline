import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from './baseQuery';

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({

        create: builder.mutation({
            query: (data) => ({
                url: 'account/new',
                method: 'POST',
                body: data
            }),
        }),

        details: builder.query({
            query: (id) => ({
                url: `account/getDetails/${id}`,
                method: 'GET',
            })
        })

    }),
});

export const { useCreateMutation, useDetailsQuery } = accountApi;