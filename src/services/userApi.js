import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        getAllUser: builder.query({
            query: () => ({
                url: 'user/',
                method: 'GET',
            }),
            providesTags: ['User'],

        }),
        getUserById: builder.query({
            query: () => ({
                url: 'user/my-accounts',
                method: 'GET',
            })
        }),
        getEnterprises: builder.query({
            query: () => ({
                url: 'user/enterprise',
                method: 'GET',
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: 'auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        editUser: builder.mutation({
            query: (data) => ({
                url: 'user/',
                method: 'PUT',
                body: data,
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `user/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['User'],
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `user/${data._id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useUpdateUserMutation, useLoginMutation, useRegisterMutation, useGetAllUserQuery, useEditUserMutation, useGetUserByIdQuery, getEnterprises, useDeleteUserMutation } = userApi;