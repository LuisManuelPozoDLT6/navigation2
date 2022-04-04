import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile'
import Smart from '../screens/Smart'
import Location from '../screens/Location';

const Stack = createStackNavigator();

export default function profileStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name='Profile' component={Profile} options={{title: "Perfil"}}/>
          <Stack.Screen name='location' component={Location} options={{title: "localización"}}/>
      </Stack.Navigator>
  )
}