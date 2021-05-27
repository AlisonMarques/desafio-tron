import React from 'react';

import { Searchbar } from 'react-native-paper';

import { Container, ContentList } from './styles';

export function SearchBar({ onChangeText, value, handle, ...rest }) {
   return (
      <Container>
         <Searchbar
            {...rest}
            onSubmitEditing={handle}
            onIconPress={handle}
            placeholder="Find in artists"
            onChangeText={onChangeText}
            value={value}
            style={{ backgroundColor: '#282828' }}
            inputStyle={{ color: '#fff' }}
            placeholderTextColor={'#B3B3B3'}
            iconColor={'#B3B3B3'}
            keyboardAppearance="light"
         />
      </Container>
   );
}
