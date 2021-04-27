import React, { useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import api from '../../services/api.js';

import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header/Header';
import { Container } from './styles';
import { Tabs } from '../../components/Tabs/Tabs.js';
import { Content } from '../../components/Content/Content.js';

export function List() {
   // const {register, handleSubmit} = useForm();
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
