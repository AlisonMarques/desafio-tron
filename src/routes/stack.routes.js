import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

export default function AppRoutes() {
   return (
      <stackRoutes.Navigator
         headerMode="none"
         screenOptions={{
            cardStyle: {
               backgroundColor: '#222',
            },
         }}>
         <stackRoutes.Screen name="List" component={AuthRoutes} />

         <stackRoutes.Screen name="Details" component={AuthRoutes} />
      </stackRoutes.Navigator>
   );
}
