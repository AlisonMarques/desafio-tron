export const spotifyAuthConfig = {
   clientId: 'aebaa146fb44453d9a0dea1e4fc324ff',
   clientSecret: '2005cb84371f4816897da303838ea892',
   redirectUrl: 'com.desafiotron:/oauthredirect/',
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
