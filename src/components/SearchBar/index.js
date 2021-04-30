import React from 'react';

import { Searchbar } from 'react-native-paper';

import { KeyboardAvoidingView } from 'react-native';

import { Container } from './styles';

export function SearchBar({ onChangeText, value }) {
   return (
      <Container>
         <KeyboardAvoidingView>
            <Searchbar
               placeholder="Find in artists"
               onChangeText={onChangeText}
               value={value}
               style={{ backgroundColor: '#282828' }}
               inputStyle={{ color: '#fff' }}
               placeholderTextColor={'#B3B3B3'}
               iconColor={'#B3B3B3'}
            />
         </KeyboardAvoidingView>
      </Container>
   );
}
