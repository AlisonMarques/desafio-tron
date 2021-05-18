import * as types from './types';

const INITIAL_STATE = {
   accessToken: '',
   details: {},
   artists: {},
};

export default function artistReducer(state = INITIAL_STATE, action) {
   const { type, payload } = action;
   switch (type) {
      case types.SET_ARTISTS_RESULT:
         return {
            ...state,
            acessToken: payload.accessToken,
            details: payload.details,
            artists: payload.artists,
         };

      default:
         return state;
   }
}
