import React from 'react';

import { View, Text } from 'react-native';
import { Container } from './styles';
import { Header } from '../../components/Header/Header';
import { Content } from '../../components/Content/Content';
export function Details() {
   return (
      <Container>
         <Header title="Details" />
      </Container>
   );
}
