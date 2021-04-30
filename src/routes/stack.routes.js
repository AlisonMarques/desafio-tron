import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './tab.routes';
import { Search } from '../screens/Search';
import { Details } from '../screens/Details';

const stackRoutes = createStackNavigator();

export default function AppRoutes() {
   return (
      <stackRoutes.Navigator
         headerMode="none"
         screenOptions={{
            cardStyle: {
               backgroundColor: '#121212',
            },
         }}>
         <stackRoutes.Screen name="List" component={AuthRoutes} />

         <stackRoutes.Screen name="Search" component={AuthRoutes} />

         <stackRoutes.Screen name="Details" component={Details} />
      </stackRoutes.Navigator>
   );
}
