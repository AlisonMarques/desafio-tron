import * as types from './types';
import api from '../../../services/api';

const INITIAL_STATE = {
   accessToken: null,
};

export default function authReducer(state = INITIAL_STATE, action) {
   const { type, payload } = action;

   switch (type) {
      case types.SET_ACCESSTOKEN_RESULT:
         return {
            accessToken: payload.accessToken,
         };
      case types.PERSIST_REHYDRATE:
         api.defaults.headers.Authorization = `Bearer ${payload.authReducer.accessToken}`;
         return {
            accessToken: payload.authReducer.accessToken,
         };

      default:
         return state;
   }
}
