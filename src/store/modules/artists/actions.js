import * as types from './types';
import api from '../../../services/api';

function setArtistsState(payload) {
   return {
      type: types.SET_ARTISTS_RESULT,
      payload: payload,
   };
}

export const getArtists = name => async dispatch => {
   try {
      const { data } = await api.get(
         `search?q=${name}&type=artist&limit=10&offset=5`,
      );
      console.tron.log(data === null);
      return dispatch(setArtistsState(data));
   } catch (err) {
      dispatch(types.SET_ARTISTS_ERROR);
   }
};
