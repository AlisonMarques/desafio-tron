import React from 'react';
import { FlatList } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { Container, List, Name, Image, Title } from './styles';

import profile from '../../Image/alison.png';
import newsletter from '../../Image/newsletter-tron.png';
import sorted from '../../Image/plantsSorted.png';
import tela from '../../Image/tela.png';
import coursera from '../../Image/coursera.png';
import conta5 from '../../Image/conta5.png';
import indexImg from '../../Image/index.tsx.png';

export function Content() {
   const images = [
      { id: 1, Profile: profile, title: 'Alison Marques' },
      { id: 2, new: newsletter, title: 'Letíca Lopes' },
      { id: 3, Sort: sorted, title: 'Davi Marques' },
      { id: 4, TL: tela, title: 'Jefferson Marques' },
      { id: 5, Coursera: coursera, title: 'Claudio Marques' },
      { id: 6, TL3: conta5, title: 'Leia Tucunduva' },
      { id: 7, TL4: indexImg, title: 'Nick Marques' },
   ];

   return (
      <Container>
         <List>
            <FlatList
               data={images}
               onEndReachedThreshold={0.7}
               keyExtractor={item => String(item.id)}
               renderItem={({ item }) => (
                  <RectButton
                     style={{
                        flexDirection: 'row',
                        padding: 0,
                        width: 379,
                        left: 0,
                        top: 0,
                     }}>
                     <Image source={item.id} />
                     <Name>{item.title}</Name>
                  </RectButton>

                  // <Image source={item.Profile} />
               )}
            />
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
