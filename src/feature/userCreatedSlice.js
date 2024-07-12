import { createSlice } from "@reduxjs/toolkit";
import { update } from "three/examples/jsm/libs/tween.module.js";

const initialState = {
    userCreated: null
};

const userCreatedSlice = createSlice({

    name: 'userCreated',
    initialState,
    reducers: {
        setUserCreated: (state, action) => {
            const { userCreated } = action.payload;
            state.userCreated = userCreated;
        },
        clearUserCreated: (state) => {
            state.userCreated = null;
        },
        updateUserCreated: (state, action) => {
            const userCreated = action.payload;
            if (userCreated) {
                state.userCreated = userCreated;
            }
        }
    }
});

export const { setUserCreated, clearUserCreated, updateUserCreated } = userCreatedSlice.actions;
export default userCreatedSlice.reducer;