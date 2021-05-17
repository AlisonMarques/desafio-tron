import React from 'react';

import { View, Text, FlatList } from 'react-native';
import { Container } from './styles';
import { Header } from '../../components/Header/Header';
import { Content } from '../../components/Content/Content';

import { useNavigation, useRoute } from '@react-navigation/core';

export default function Details() {
   const route = useRoute();

   const { getArtists } = route.params;

   const { name } = getArtists;

   // const artists = { ...getArtists };
   console.tron.log(getArtists);

   // const selectArtist = getArtists.map(findOneArtist);

   return (
      <Container>
         <Header title="Details" />
         <FlatList
            data={name}
            styles={{ color: 'red' }}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => {
               console.tron.log(...item);
               console.log(item.name);
            }}
         />
      </Container>
   );
}
