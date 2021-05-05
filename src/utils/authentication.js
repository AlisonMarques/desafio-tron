import { authorize, refresh } from 'react-native-app-auth';
import api from '../services/api';

class Authentication {
   constructor() {
      this.spotifyAuthConfig = {
         clientId: 'aebaa146fb44453d9a0dea1e4fc324ff',
         clientSecret: '2005cb84371f4816897da303838ea892',
         redirectUrl: 'com.desafiotron:/oauthredirect',
         scopes: [
            'playlist-read-private',
            'playlist-modify-public',
            'playlist-modify-private',
            'user-library-read',
            'user-library-modify',
            'user-top-read',
         ],
         serviceConfiguration: {
            authorizationEndpoint: 'https://accounts.spotify.com/authorize',
            tokenEndpoint: 'https://accounts.spotify.com/api/token',
            artistsEndpoint: 'https://api.spotify.com/v1/artists/',
         },
      };
   }

   async onLogin() {
      try {
         const result = await authorize(this.spotifyAuthConfig);
         alert(JSON.stringify(result));
         return result;
      } catch (error) {
         console.log(JSON.stringify(error));
      }
   }

   async refreshLogin(refreshToken) {
      const result = await refresh(this.spotifyAuthConfig, {
         refreshToken: refreshToken,
      });

      return result;
   }
}

const authHandler = new Authentication();

export default authHandler;
