import React from 'react';

import { View, Text } from 'react-native';
import { Container } from './styles';
import { Header } from '../../components/Header/Header';
import { Content } from '../../components/Content/Content';
export default function Details() {
   return (
      <Container>
         <Header title="Details" />
         <Text style={{ color: '#fff' }}>teste</Text>
      </Container>
   );
}
