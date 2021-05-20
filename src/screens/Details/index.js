import React from 'react';

import { View, Text, FlatList, Image } from 'react-native';
import { Container, NameArtist, ImageArtist, Content } from './styles';
import { Header } from '../../components/Header/Header';

import { useNavigation, useRoute } from '@react-navigation/core';

export default function Details() {
   const route = useRoute();

   const [artists] = route.params;

   return (
      <Container>
         <Header title="Details" />
         <Content style={{ backgroundColor: '#222' }}>
            <View style={{ flexDirection: 'row' }}>
               <ImageArtist source={{ uri: artists.images[0].url }} />

               <NameArtist>{artists.name}</NameArtist>
            </View>
            <View>
               <Text style={{ color: 'white', textAlign: 'center' }}>
                  Followers: {artists.followers.total}
               </Text>
               <Text style={{ color: 'white', textAlign: 'center' }}>
                  Popularity: {artists.popularity}
               </Text>
               <Text style={{ color: 'white', textAlign: 'center' }}>
                  Genres: {artists.genres}
               </Text>
            </View>
         </Content>
      </Container>
   );
}
