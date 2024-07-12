import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services/userApi';
import { accountApi } from './services/accountApi';
import { transactionApi } from './services/transactionApi';
import { serviceApi } from './services/serviceApi';
import { favoriteApi } from './services/favoriteApi';
import userReducer from './feature/userSlice';
import userCreatedReducer from './feature/userCreatedSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const persistedReducer1 = persistReducer(persistConfig, userCreatedReducer);

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [transactionApi.reducerPath]: transactionApi.reducer,
        [serviceApi.reducerPath]: serviceApi.reducer,
        [favoriteApi.reducerPath]: favoriteApi.reducer,
        user: persistedReducer,
        userCreated: persistedReducer1
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(
            userApi.middleware,
            accountApi.middleware,
            transactionApi.middleware,
            serviceApi.middleware,
            favoriteApi.middleware
        ),

});

export const persistor = persistStore(store);
