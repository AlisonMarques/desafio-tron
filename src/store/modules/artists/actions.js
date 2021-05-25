import * as types from './types';
import api from '../../../services/api';
import { authorize } from 'react-native-app-auth';
import { spotifyAuthConfig } from '../../../utils/spotifyAuthConfig';

function setArtistsState(payload) {
   return {
      type: types.SET_ARTISTS_RESULT,
      payload,
   };
}

export const getArtists = () => async dispatch => {
   try {
      const ids =
         '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin';

      //const { artists } = getState().artistReducer;

      const { data } = await api.get(`artists?ids=${ids}`);

      const result = {
         ...data,
      };

      dispatch(setArtistsState(result));
   } catch (err) {
      dispatch(types.SET_ARTISTS_ERROR);
   }
};
