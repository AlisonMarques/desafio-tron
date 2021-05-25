import React, { useEffect, useState } from 'react';
import { authorize, refresh } from 'react-native-app-auth';

import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules';

import { View, TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function Login() {
   const navigation = useNavigation();

   const dispatch = useDispatch();

   function handleLogin() {
      dispatch(authActions.getAccessToken());
      navigation.navigate('List');
   }

   const isRehydrated = useSelector(state => state._persist.rehydrated);

   const accessToken = useSelector(state => state.authReducer.accessToken);

   useEffect(() => {
      if (isRehydrated && accessToken) {
         navigation.navigate('List');
      }
   }, [isRehydrated, accessToken, navigation]);

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
            onPress={handleLogin}>
            <Text style={{ color: '#ffffff' }}>Login With Spotify</Text>
         </TouchableOpacity>
      </View>
   );
}
