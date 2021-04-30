import React from 'react';

import { Header } from '../../components/Header/Header';
import { Container } from './styles';
import { Tabs } from '../../components/Tabs/Tabs.js';
import { SearchBar } from '../../components/SearchBar';

export function Search() {
   return (
      <Container>
         <Header title="Música" />
         <Tabs />
         <SearchBar />
      </Container>
   );
}
