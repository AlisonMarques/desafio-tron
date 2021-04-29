import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { List } from '../screens/List';
import { Details } from '../screens/Details';

import Icon from 'react-native-vector-icons/FontAwesome5';

const AppTab = createBottomTabNavigator();

export default function AuthRoutes() {
   return (
      <AppTab.Navigator
         tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#52665A',
            labelPosition: 'below-icon',
            style: { height: 60, backgroundColor: '#222' },
         }}>
         <AppTab.Screen
            name="List"
            component={List}
            options={{
               tabBarIcon: () => <Icon name="home" size={25} color={'#fff'} />,
            }}
         />

         <AppTab.Screen
            name="Details"
            component={Details}
            options={{
               tabBarIcon: () => (
                  <Icon name="search" size={25} color={'#fff'} />
               ),
            }}
         />
      </AppTab.Navigator>
   );
}
