import React, { useEffect, useState } from 'react';
import { authorize, refresh } from 'react-native-app-auth';

import { View, TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function Login({ navigation }) {
   const [accessToken, setAcessToken] = useState('');

   useEffect(() => {
      onLogin();
   }, []);

   async function onLogin() {
      const spotifyAuthConfig = {
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
      try {
         const results = await authorize(spotifyAuthConfig);

         console.tron.log(accessToken);
         setAcessToken(results.accessToken);
         navigation.navigate('List', accessToken);
         return results;
      } catch (error) {
         console.log(JSON.stringify(error));
      }
   }

   return (
      <View
         style={{
            backgroundColor: '#121212',
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
         }}>
         <TouchableOpacity
            style={{
               backgroundColor: '#222',
               alignItems: 'center',
               padding: 10,
            }}
            onPress={() => {
               navigation.navigate('Search', accessToken);
            }}>
            <Text style={{ color: '#ffffff' }}>Login With Spotify</Text>
         </TouchableOpacity>
      </View>
   );
}
