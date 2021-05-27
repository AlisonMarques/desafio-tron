import React from 'react';

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
            {item && item.images.length > 0 && item.images[0].url && (
               <ImageArtist source={{ uri: item.images[0].url }} />
            )}
            {/* <ImageArtist source={{ uri: item.images[0].url }} /> */}
            <Name>{item.name}</Name>
         </RectButton>
      </Container>
   );
}
