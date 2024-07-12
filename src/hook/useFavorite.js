import { useGetAllFavoritesQuery, useAddFavoriteMutation, useDeleteFavoriteMutation } from '../services/favoriteApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const useFavorite = () => {
    const { data: favorites = [], error, isLoading, refetch } = useGetAllFavoritesQuery();
    const [addFavorite, { isLoading: isAdding }] = useAddFavoriteMutation();
    const [deleteFavorite, { isLoading: isDeleting }] = useDeleteFavoriteMutation();

    useEffect(() => {
        if (error) {
            toast.error('Error fetching favorites');
        }
    }, [error]);

    const handleAddFavorite = async (favoriteData) => {
        try {
            await addFavorite(favoriteData).unwrap();
            toast.success('Favorite added successfully');
            refetch();  // Actualiza la lista de favoritos
        } catch (error) {
            console.error('Error adding favorite:', error);
            toast.error('Error adding favorite');
        }
    };

    const handleDeleteFavorite = async (id) => {
        try {
            await deleteFavorite(id).unwrap();
            toast.success('Favorite removed successfully');
            refetch();  // Actualiza la lista de favoritos
        } catch (error) {
            console.error('Error removing favorite:', error);
            toast.error('Error removing favorite');
        }
    };

    return {
        favorites,
        addFavorite: handleAddFavorite,
        deleteFavorite: handleDeleteFavorite,
        loading: isLoading || isAdding || isDeleting
    };
};

export default useFavorite;
