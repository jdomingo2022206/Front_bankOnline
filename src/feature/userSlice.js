import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            state.token = user.token;
            state.isAuthenticated = true;
        },
        clearCredentials: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        updateCredentials: (state, action) => {
            const user = action.payload;
            if (user) {
                state.user = user;
            }
        },
    },
});

export const { setCredentials, clearCredentials, updateCredentials } = userSlice.actions;
export default userSlice.reducer;