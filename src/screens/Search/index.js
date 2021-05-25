import React, { useState, useEffect } from 'react';

import { View, FlatList, ActivityIndicator } from 'react-native';

import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Container, ContentList } from './styles';

import { Header } from '../../components/Header/Header';
import { Tabs } from '../../components/Tabs/Tabs.js';
import { SearchBar } from '../../components/SearchBar';
import { Content } from '../../components/Content/Content';

export default function Search() {
   // const route = useRoute();

   const [getArtists, setGetArtists] = useState([]);
   const [filterData, setFilterData] = useState([]);

   const [isLoading, setIsLoading] = useState(true);
   const [filter, setFilter] = useState('');

   const navigation = useNavigation();

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
         .get(`search?q=Muse&type=artist&limit=10&offset=5`)
         .then(async function (response) {
            setGetArtists(response.data);
            setFilterData(response.data);
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

   // const searchFilter = name => {
   //    if (name) {
   //       const filterData = getArtists.artists.items.filter(artist => {
   //          const itemData = artist.name
   //             ? artist.name.toUpperCase()
   //             : ''.toUpperCase();

   //          const nameData = name.toUpperCase();
   //          return itemData.indexOf(nameData) > -1;
   //       });

   //       setFilterData(filterData);
   //       setFilter(name);
   //    } else {
   //       setFilterData(getArtists);
   //       setFilter(name);
   //    }
   // };

   return (
      <Container>
         <Header title="Música" />
         <Tabs />
         <SearchBar value={filter} onChangeText={name => searchFilter(name)} />
         <ContentList>
            <View>
               <FlatList
                  data={getArtists}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
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
