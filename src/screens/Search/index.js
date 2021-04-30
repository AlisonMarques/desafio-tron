import React from 'react';

import {
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard,
   Platform,
   View,
   SafeAreaView,
} from 'react-native';

import { Header } from '../../components/Header/Header';
import { Container, Containerr } from './styles';
import { Tabs } from '../../components/Tabs/Tabs.js';
import { SearchBar } from '../../components/SearchBar';
import { Content } from '../../components/Content/Content';

export function Search() {
   return (
      <Container>
         <Header title="Música" />
         <Tabs />
         <SearchBar />
         <Content />
      </Container>
   );
}
