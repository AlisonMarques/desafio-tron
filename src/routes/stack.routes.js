import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './tab.routes';
import Details from '../screens/Details';
import List from '../screens/List';

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
         <stackRoutes.Screen name="Login" component={AuthRoutes} />

         <stackRoutes.Screen name="List" component={List} />

         <stackRoutes.Screen name="Search" component={AuthRoutes} />

         <stackRoutes.Screen name="Details" component={Details} />
      </stackRoutes.Navigator>
   );
}
