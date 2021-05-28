import React, { useEffect, useState } from 'react';

import { FlatList, View, ActivityIndicator } from 'react-native';

import { Header } from '../../components/Header/Header';
import { Container, Lista, ContentList } from './styles';
import { Tabs } from '../../components/Tabs/Tabs.js';
import { Content } from '../../components/Content/Content.js';

import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/core';

import api from '../../services/api';

export default function List() {
   const [getArtists, setGetArtists] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const navigation = useNavigation();
   const isRehydrated = useSelector(state => state._persist.rehydrated);

   const accessToken = useSelector(state => state.authReducer.accessToken);

   useEffect(() => {
      if (isRehydrated && !accessToken) {
         navigation.navigate('Login');
      }
   }, [isRehydrated, accessToken, navigation]);

   function handleArtistSelected(item) {
      navigation.navigate('Details', [item]);
   }

   const ids =
      '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin';

   useEffect(() => {
      setIsLoading(true);
      getArtistsFromAPi();
   }, []);

   async function getArtistsFromAPi() {
      await api
         .get(`artists?ids=${ids}`)
         .then(async function (response) {
            setGetArtists(response.data);
            setIsLoading(false);
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   if (!getArtists) {
      return null;
   }

   if (isLoading) {
      return (
         <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#5500dc" />
         </View>
      );
   }

   return (
      <Container>
         <Header title="Música" />
         <Tabs />
         <ContentList>
            <Lista>
               <View>
                  <FlatList
                     contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                     }}
                     data={getArtists.artists}
                     styles={{ flex: 1, backgroundColor: 'red' }}
                     showsVerticalScrollIndicator={false}
                     keyExtractor={(item, index) => item.id}
                     key={item => item.id}
                     renderItem={({ item }) => (
                        <Content
                           item={item}
                           onPress={() => handleArtistSelected(item)}
                        />
                     )}
                  />
               </View>
            </Lista>
         </ContentList>
      </Container>
   );
}
