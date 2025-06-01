import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContentInfo } from "../../types";
import { serviceContent } from "../../constants/services";


// State type: an array of services
interface ServiceState {
    data: ContentInfo[];
}

const initialState: ServiceState = {
    data: serviceContent,
};

const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        // Add a new service
        addService: (state, action: PayloadAction<ContentInfo>) => {
            state.data.push(action.payload);
        },
        // Remove a service by title (or use another unique field)
        removeService: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter(service => service.title !== action.payload);
        },
        // Set all services (e.g., after fetching from API)
        setServices: (state, action: PayloadAction<ContentInfo[]>) => {
            state.data = action.payload;
        },
        // Clear all services
        clearServices: (state) => {
            state.data = [];
        },
    },
});

export const { addService, removeService, setServices, clearServices } = serviceSlice.actions;
export default serviceSlice.reducer;
