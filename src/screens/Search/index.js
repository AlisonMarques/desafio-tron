import React, { useState, useEffect } from 'react';

import { View, FlatList, Text, ActivityIndicator } from 'react-native';

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
   const [offset, setOffset] = useState(1);
   const [isListEnd, setIsListEnd] = useState(false);

   const navigation = useNavigation();

   function handleArtistSelected(item) {
      navigation.navigate('Details', [item]);
   }

   const dispatch = useDispatch();
   const data = useSelector(state => state.artistReducer.artists);
   useEffect(() => {
      // setIsLoading(true);
      getData();
   }, [list, filter]);

   const getData = () => {
      dispatch(artistActions.getArtists(filter));
      setList(data.items);
   };

   const handleOnEndReached = () => {
      dispatch(artistActions.getArtists(filter));
      setList([...list, data.items]);
      setIsLoading(false);
   };

   async function handleFilterArtistByName(textoParaFiltrar) {
      if (data && data.items) {
         const result = await data.items.filter(artist => {
            return artist.name
               .toLowerCase()
               .includes(textoParaFiltrar.toLowerCase());
         });
         setList(result);
      }
      setFilter(textoParaFiltrar);
   }

   const renderFooter = () => {
      return (
         <View
            style={{
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'row',
            }}>
            {isLoading ? (
               <ActivityIndicator color="white" style={{ margin: 15 }} />
            ) : null}
         </View>
      );
   };

   return (
      <Container>
         <Header title="Música" />
         <Tabs />
         <SearchBar
            value={filter}
            onChangeText={name => handleFilterArtistByName(name)}
         />
         <ContentList>
            <View>
               <FlatList
                  data={list}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => String(item.id)}
                  contentContainerStyle={{ justifyContent: 'space-between' }}
                  renderItem={({ item }) => (
                     <Content
                        item={item}
                        onPress={() => handleArtistSelected(item)}
                     />
                  )}
                  ListFooterComponent={renderFooter}
                  onEndReached={handleOnEndReached}
                  onEndReachedThreshold={0.1}
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
