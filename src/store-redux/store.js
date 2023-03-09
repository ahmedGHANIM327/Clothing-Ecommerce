import {compose , createStore , applyMiddleware } from 'redux'
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

export const persistor = persistStore(store);