import React from 'react';

import { Container, ButtonTitle, Title, Activity } from './styles';

export function Tabs() {
   return (
      <Container>
         <ButtonTitle>
            <Activity />
            <Title>Artistas</Title>
         </ButtonTitle>
      </Container>
   );
}
