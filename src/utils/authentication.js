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
         },
      };
   }

   async onLogin() {
      try {
         const { accessToken } = await authorize(this.spotifyAuthConfig);
         const endpoint = 'https://api.spotify.com/v1/artists';
         const artists =
            '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin';

         fetch(`${endpoint}?ids=${artists}`, {
            method: 'GET',
            headers: {
               Authorization: `Bearer ${accessToken}`,
            },
         })
            .then(response => response.json())
            .then(({ artists }) => {
               artists.map(item => {
                  console.log({ ...item });
               });
            });
         // .then(({ artists }) => {
         //    artists.forEach(item => {
         //       console.log(`${item.id} ${item.name}`);
         //    });
         // });
         //  return response;
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

   async getArtists() {
      const { data } = await api.get('https://api.spotify.com/v1/artists');
      console.log(data);
      return data;
   }
}

const authHandler = new Authentication();

export default authHandler;
