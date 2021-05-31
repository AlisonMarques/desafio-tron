import React from 'react';

import {
   Container,
   ContainerTouchable,
   NameArtist,
   ImageArtist,
   Content,
   Title,
   Content_Drescriptions,
   Drescriptions,
} from './styles';
import { Header } from '../../components/Header/Header';

import { useRoute } from '@react-navigation/core';

export default function Details() {
   const route = useRoute();

   const [artists] = route.params;

   return (
      <Container>
         <Header title="Details" />
         <ContainerTouchable>
            <Content>
               <Title>
                  <ImageArtist source={{ uri: artists.images[0].url }} />

                  <NameArtist>{artists.name}</NameArtist>
               </Title>
               <Content_Drescriptions>
                  <Drescriptions>
                     Followers: {artists.followers.total}
                  </Drescriptions>
                  <Drescriptions>
                     Popularity: {artists.popularity}
                  </Drescriptions>
                  <Drescriptions>
                     Genres: {artists.genres.map(space => space + ' ')}
                  </Drescriptions>
               </Content_Drescriptions>
            </Content>
         </ContainerTouchable>
      </Container>
   );
}
