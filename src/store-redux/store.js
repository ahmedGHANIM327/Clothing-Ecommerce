/*import {compose , createStore , applyMiddleware } from 'redux'
import logger from 'redux-logger';

// Redux-persist
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// root-rducer
import { rootReducer } from './root-reducer';


const middleWares = [logger];

const persistConfig = {
    key: 'root',      // root <=> we want to persist every thing
    storage,
    blacklist: ['user'], // what we don't want persist
};



const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);


export const persistor = persistStore(store);*/

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

