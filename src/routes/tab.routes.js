import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import List from '../screens/List';
import Search from '../screens/Search';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Login from '../screens/Login';

const AppTab = createBottomTabNavigator();

export default function AuthRoutes() {
   return (
      <AppTab.Navigator
         tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: '#52665A',
            labelPosition: 'below-icon',
            labelStyle: { fontSize: 12, marginBottom: 5 },
            style: {
               height: 56,
               backgroundColor: '#222',
            },
         }}>
         <AppTab.Screen
            name="Login"
            component={Login}
            options={{
               tabBarIcon: () => (
                  <MaterialIcons name="login" size={25} color={'#fff'} />
               ),
            }}
         />

         <AppTab.Screen
            name="List"
            component={List}
            options={{
               tabBarIcon: () => (
                  <MaterialIcons
                     name="format-list-bulleted"
                     size={25}
                     color={'#fff'}
                  />
               ),
            }}
         />
         <AppTab.Screen
            name="Search"
            component={Search}
            options={{
               tabBarIcon: () => (
                  <Icon name="search" size={25} color={'#fff'} />
               ),
            }}
         />
      </AppTab.Navigator>
   );
}
