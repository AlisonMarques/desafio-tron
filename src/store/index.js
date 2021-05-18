import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducers';

const configPersist = {
   key: 'ApiSpotify',
   storage: AsyncStorage,
   version: 1,
};

const reactotron = __DEV__ && console.tron.createEnhancer();

const composeEnhancers = __DEV__
   ? compose(applyMiddleware(thunkMiddleware), reactotron)
   : compose(applyMiddleware(thunkMiddleware));

const persistedReducer = persistReducer(configPersist, rootReducer);

const store = createStore(persistedReducer, composeEnhancers);

const persistor = persistStore(store);

export { store, persistor };
