import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, SubContainer, GroupAction, ActionName } from './styles';

export function TabBar() {
   const [iconConfigure] = useState({
      color: '#fff',
      size: 25,
   });
   return (
      <Container>
         <SubContainer>
            <GroupAction>
               <Icon name="home" {...iconConfigure} />
               <ActionName>Início</ActionName>
            </GroupAction>
            <GroupAction>
               <Icon name="search" {...iconConfigure} />
               <ActionName>Buscar</ActionName>
            </GroupAction>
         </SubContainer>
      </Container>
   );
}
