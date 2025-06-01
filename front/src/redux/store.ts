import { combineReducers, configureStore } from '@reduxjs/toolkit';
import projectReducer from './slices/projectSlice'
import ServiceReducer from './slices/ServiceSlice'

const rootReducer = combineReducers({
    projectReducer,
    ServiceReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;