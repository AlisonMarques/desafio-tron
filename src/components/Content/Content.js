import React from 'react';

import { RectButton } from 'react-native-gesture-handler';

import { Name, Image } from './styles';

export function Content({ image, name, ...rest }) {
   return (
      <RectButton
         style={{
            flexDirection: 'row',
            marginBottom: 5,
         }}
         {...rest}>
         <Image source={image} />
         <Name>{name}</Name>
      </RectButton>
   );
}
