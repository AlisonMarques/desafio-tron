import React from 'react';

import {
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard,
   Platform,
   View,
} from 'react-native';

import { Searchbar } from 'react-native-paper';

import { Container, Containerr } from './styles';

export function SearchBar({ onChangeText, value }) {
   return (
      <Container>
         <KeyboardAvoidingView
            style={Containerr}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <Searchbar
                  placeholder="Find in artists"
                  onChangeText={onChangeText}
                  value={value}
                  style={{ backgroundColor: '#282828' }}
                  placeholderTextColor={'#B3B3B3'}
                  iconColor={'#B3B3B3'}
               />
            </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
      </Container>
   );
}
