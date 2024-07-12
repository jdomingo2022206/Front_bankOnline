import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const favoriteApi = createApi({
    reducerPath: 'favoriteApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllFavorites: builder.query({
            query: () => ({
                url: 'favorite/',
                method: 'GET',
            }),
        }),
        addFavorite: builder.mutation({
            query: (data) => ({
                url: 'favorite/fav',
                method: 'POST',
                body: data,
            }),
        }),
        deleteFavorite: builder.mutation({
            query: (id) => ({
                url: `favorite/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetAllFavoritesQuery, useAddFavoriteMutation, useDeleteFavoriteMutation } = favoriteApi;
