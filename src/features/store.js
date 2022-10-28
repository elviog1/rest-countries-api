import { configureStore } from "@reduxjs/toolkit";
import countryApi from "./countryApi";
export const store = configureStore({
    reducer:{
        [countryApi.reducerPath]: countryApi.reducer,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    }).concat(countryApi.middleware)
})