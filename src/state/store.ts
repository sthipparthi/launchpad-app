import { configureStore, Reducer } from "@reduxjs/toolkit";
import launchEventsReducer from "../reducers/launchEventsReducer";
import { LaunchEventState, modalState } from "./types/LaunchEvent";
import modalReducer from "../reducers/app-reducers";

const store = configureStore(
    {
        reducer: {
            launchEvents: launchEventsReducer as Reducer<LaunchEventState, any>,
            modal: modalReducer as Reducer<modalState, any>
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
    }
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;