import React from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native';

const AUTH_URL =
   'https://accounts.spotify.com/authorize?client_id=aebaa146fb44453d9a0dea1e4fc324ff&response_type=code&redirect_uri=http://192.168.0.105:8081&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';
//Linking.openURL(AUTH_URL)

import authHandler from '../../utils/authentication';
// console.tron.log('teste');
// console.tron.log('teste2');
// console.tron.log('teste23');
export function Login() {
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
            onPress={() => authHandler.onLogin()}>
            <Text style={{ color: '#ffffff' }}>Login With Spotify</Text>
         </TouchableOpacity>
      </View>
   );
}
