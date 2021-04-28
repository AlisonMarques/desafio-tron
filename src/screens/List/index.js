import React, { useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import api from '../../services/api.js';

import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header/Header';
import { Container } from './styles';
import { Tabs } from '../../components/Tabs/Tabs.js';
import { Content } from '../../components/Content/Content.js';

export function List() {
   useEffect(() => {
      async function fetchList() {
         const { data } = await api.get('https://api.spotify.com/v1/artists');
         const {} = data;
      }
   });

   return (
      <SafeAreaView>
         <Container>
            <Header />
            <Tabs />
            <Content />
         </Container>
      </SafeAreaView>
   );
}
