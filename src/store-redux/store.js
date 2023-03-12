import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// root-rducer
import { rootReducer } from './root-reducer';

import logger from 'redux-logger';

const middleWares = [logger];

export const store = configureStore({
    reducer:rootReducer,
    // Here add middleware to our store
    // getDefaultMiddleware return an array of default middlwares
    middleware : () => getDefaultMiddleware({
        serializableCheck: false, // means we don't want to check serializable 
    }).concat(middleWares),
})

