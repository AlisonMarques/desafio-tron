import React, { useState, useEffect } from 'react';

import { View, FlatList, ActivityIndicator } from 'react-native';

import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Container, ContentList } from './styles';

import { Header } from '../../components/Header/Header';
import { Tabs } from '../../components/Tabs/Tabs.js';
import { SearchBar } from '../../components/SearchBar';
import { Content } from '../../components/Content/Content';

export default function Search({ route }) {
   // const route = useRoute();
   const accessToken = route.params;

   const [getArtists, setGetArtists] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [filter, setFilter] = useState('');

   const navigation = useNavigation();

   function handleArtistSelected() {
      navigation.navigate('Details', { getArtists });
   }

   const ids =
      '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin';

   useEffect(() => {
      setIsLoading(true);

      getArtistsFromAPi();
   }, []);

   async function getArtistsFromAPi() {
      await api
         .get(`artists?ids=${ids}`, {
            headers: {
               Authorization: `Bearer ${accessToken}`,
            },
         })
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
         <SearchBar value={filter} onChangeText={value => setFilter(value)} />
         <ContentList>
            <View>
               <FlatList
                  data={getArtists.artists.filter(item =>
                     item.name.toLowerCase().includes(filter.toLowerCase()),
                  )}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => 'key' + index}
                  contentContainerStyle={{ justifyContent: 'space-between' }}
                  renderItem={({ item }) => (
                     <Content
                        item={item}
                        onPress={() => handleArtistSelected(item)}
                     />
                  )}
               />
            </View>
         </ContentList>
      </Container>
   );
}
