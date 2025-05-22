import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminProps {
    username: string;
    userpass: string;
    name: string;
    email: string;
    phone: string;
    profilepic: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

interface AdminState {
    data: AdminProps | null;
}

const initialState: AdminState = {
    data: null,
};

const projectSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdmin: (state, action: PayloadAction<AdminProps>) => {
            state.data = action.payload;
        },
        clearAdmin: (state) => {
            state.data = null;
        },
    },
});

export const { setAdmin, clearAdmin } = projectSlice.actions;
export default projectSlice.reducer;
