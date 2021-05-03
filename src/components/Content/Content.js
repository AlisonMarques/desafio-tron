import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { RectButton } from 'react-native-gesture-handler';

import { Details } from '../../screens/Details';
import profile from '../../Image/alison.png';
import newsletter from '../../Image/newsletter-tron.png';
import sorted from '../../Image/plantsSorted.png';
import tela from '../../Image/tela.png';
import coursera from '../../Image/coursera.png';
import conta5 from '../../Image/conta5.png';
import indexImg from '../../Image/index.tsx.png';

import { Container, List, Name, Image } from './styles';

export function Content() {
   const images = [
      { id: 1, Profile: profile, title: 'Alison Marques' },
      { id: 2, Profile: newsletter, title: 'Letíca Lopes' },
      { id: 3, Profile: sorted, title: 'Davi Marques' },
      { id: 4, Profile: tela, title: 'Jefferson Marques' },
      { id: 5, Profile: coursera, title: 'Claudio Marques' },
      { id: 6, Profile: conta5, title: 'Leia Tucunduva' },
      { id: 7, Profile: indexImg, title: 'Nick Marques' },
      { id: 8, Profile: indexImg, title: 'Nick Marques' },
      { id: 9, Profile: indexImg, title: 'Nick Marques' },
      { id: 10, Profile: indexImg, title: 'Nick Marques' },
   ];

   const navigation = useNavigation();

   function handleArtistSelected() {
      navigation.navigate('Details', { images });
   }

   return (
      <Container>
         <List>
            <View style={{}}>
               <FlatList
                  data={images}
                  onEndReachedThreshold={0.7}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{}}
                  keyExtractor={item => String(item.id)}
                  renderItem={({ item }) => (
                     <RectButton
                        style={{
                           flexDirection: 'row',
                           marginBottom: 5,
                        }}
                        onPress={() => handleArtistSelected(item)}>
                        <Image source={item.Profile} />
                        <Name>{item.title}</Name>
                     </RectButton>
                     // <Image source={item.Profile} />
                  )}
               />
            </View>
         </List>
      </Container>
   );
}
{
   /* <Name>Alison Marques</Name> */
}
// data = { images };
//     <List>
// <FlatList
//    showsHorizontalScrollIndicator={false}
//    data={images}
//    keyExtractor={item => String(item.id)}
//    renderItem={({ item }) => <Image source={item.id} />}
// />
// <Name>Alison Marques</Name>
// </List>
