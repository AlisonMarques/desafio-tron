import * as types from './types';

const INITIAL_STATE = {
   artists: [],
};

export default function artistReducer(state = INITIAL_STATE, action) {
   const { type, payload } = action;
   switch (type) {
      case types.SET_ARTISTS_RESULT:
         return {
            artists: payload.artists,
            ...state.artists,
         };

      // case types.PERSIST_REHYDRATE:
      //    return {
      //       artists: payload,
      //    };

      default:
         return state;
   }
}
