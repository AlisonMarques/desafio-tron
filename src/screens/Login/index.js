import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/modules';

import { useNavigation } from '@react-navigation/core';

import { Container, ButtonOpacity, Title } from './styles';

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
      <Container>
         <ButtonOpacity
            style={{
               backgroundColor: '#222',
               alignItems: 'center',
               padding: 10,
            }}
            onPress={handleLogin}>
            <Title>Login With Spotify</Title>
         </ButtonOpacity>
      </Container>
   );
}
