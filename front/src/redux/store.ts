import { combineReducers, configureStore } from '@reduxjs/toolkit';
import projectReducer from './slices/projectSlice'

const rootReducer = combineReducers({
    projectReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;