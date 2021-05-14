import React from 'react';
import { View } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { Container, Name, ImageArtist } from './styles';

export function Content({ item, ...rest }) {
   return (
      <Container>
         <RectButton
            style={{
               flexDirection: 'row',
               marginBottom: 5,
            }}
            {...rest}>
            <ImageArtist source={{ uri: item.images[0].url }} />
            <Name>{item.name}</Name>
         </RectButton>
      </Container>
   );
}
