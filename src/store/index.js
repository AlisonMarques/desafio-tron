import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducers';

const configPersist = {
   key: 'ApiSpotify',
   storage: AsyncStorage,
   version: 1,
   whitelist: ['authReducer'],
};

const reactotron = __DEV__ && console.tron.createEnhancer();

const composedEnhancer = compose(applyMiddleware(thunkMiddleware), reactotron);

const persistedReducer = persistReducer(configPersist, rootReducer);

const store = createStore(persistedReducer, composedEnhancer);

const persistor = persistStore(store);

export { store, persistor };
