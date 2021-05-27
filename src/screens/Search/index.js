import React, { useState, useEffect } from 'react';

import { View, FlatList, Text } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/core';

import { Container, ContentList } from './styles';

import { Header } from '../../components/Header/Header';
import { Tabs } from '../../components/Tabs/Tabs.js';
import { SearchBar } from '../../components/SearchBar';
import { Content } from '../../components/Content/Content';
import { useDispatch, useSelector } from 'react-redux';
import { artistActions } from '../../store/modules';

export default function Search() {
   // const [getArtists, setGetArtists] = useState([]);

   const [isLoading, setIsLoading] = useState(true);
   const [filter, setFilter] = useState('Muse');
   const [list, setList] = useState([]);
   const [refreshing, setRefreshing] = useState(true);

   const navigation = useNavigation();

   function handleArtistSelected(item) {
      navigation.navigate('Details', [item]);
   }

   const dispatch = useDispatch();
   const data = useSelector(state => state.artistReducer.artists);
   const res = data;
   useEffect(() => {
      setIsLoading(true);
      // handlerArtist();
      dispatch(artistActions.getArtists(filter));
      // getArtistsFromAPi();
   }, [list, filter]);
   // console.tron.log(res);

   function handleFilterArtistByName(textoParaFiltrar) {
      if (res && res.items) {
         const result = res.items.filter(artist => {
            return artist.name
               .toLowerCase()
               .includes(textoParaFiltrar.toLowerCase());
         });
         setList(result);
      }
      setFilter(textoParaFiltrar);
   }

   // const renderItem = ({ item }) => (
   //
   // );

   function handlerArtist() {
      dispatch(artistActions.getArtists(filter));
      setIsLoading(false);
   }

   function handleRefresh() {
      setRefreshing((refreshing = false), () => {
         handlerArtist();
      });
   }
   console.tron.log(list);

   return (
      <Container>
         <Header title="Música" />
         <Tabs />
         <SearchBar
            value={filter}
            onChangeText={name => handleFilterArtistByName(name)}
            // onSubmitEditing={handlerArtist}
         />
         <ContentList>
            <View>
               <FlatList
                  data={list}
                  // extraData={refreshing}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => String(item.id)}
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

// async function getArtistsFromAPi() {
//    await api
//       .get(`search?q=Muse&type=artist&limit=10&offset=5`)
//       .then(async function (response) {
//          setGetArtists(response.data);
//          setIsLoading(false);
//       })
//       .catch(function (error) {
//          console.log(error);
//       });
// }

// if (!getArtists) {
//    return null;
// }

// if (isLoading) {
//    return (
//       <View
//          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <ActivityIndicator size="large" color="#5500dc" />
//       </View>
//    );
// }
