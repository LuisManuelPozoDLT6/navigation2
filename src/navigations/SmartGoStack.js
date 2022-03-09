import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SmartGo from '../screens/SmartGo'

const Stack = createStackNavigator();

export default function smartGoStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name='SmartGo' component={SmartGo} options={{title: "Smart Go"}}/>
      </Stack.Navigator>
  )
}