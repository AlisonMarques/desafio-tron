import { combineReducers } from 'redux';
import { artistReducer, authReducer } from './modules';

export default combineReducers({
   artistReducer,
   authReducer,
});
