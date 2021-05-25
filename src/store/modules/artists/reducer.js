import * as types from './types';

const INITIAL_STATE = {
   artists: [],
};

export default function artistReducer(state = INITIAL_STATE, action) {
   const { type, payload } = action;

   switch (type) {
      case types.SET_ARTISTS_RESULT:
         return {
            ...state.artists,
            artists: payload.artists,
         };

      default:
         return state;
   }
}
