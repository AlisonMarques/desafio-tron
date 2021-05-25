import * as types from './types';
import api from '../../../services/api';
import { authorize } from 'react-native-app-auth';
import { spotifyAuthConfig } from '../../../utils/spotifyAuthConfig';

function setAccessTokenState(payload) {
   return {
      type: types.SET_ACCESSTOKEN_RESULT,
      payload: { accessToken: payload },
   };
}

export const getAccessToken = () => async dispatch => {
   try {
      const { accessToken } = await authorize(spotifyAuthConfig);

      api.defaults.headers.Authorization = `Bearer ${accessToken}`;

      return dispatch(setAccessTokenState(`"${accessToken}"`));
   } catch (err) {
      dispatch(types.SET_ACCESSTOKEN_ERROR);
   }
};
