import React from 'react';
import { Text, FlatList } from 'react-native';
import { Container, List, Name } from './styles';

export function Content() {
   return (
      <Container>
         <List>
            <FlatList
               data={[
                  { key: 'Alison Marques' },
                  { key: 'teste' },
                  { key: '2' },
                  { key: '3' },
                  { key: '4' },
               ]}
               renderItem={({ item }) => <Name>{item.key}</Name>}
            />
         </List>
      </Container>
   );
}
