import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Smart from '../screens/Smart'
import Training from '../screens/Training'

const Stack = createStackNavigator();

export default function smartStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name='Smart' component={Smart} options={{title: "Smart"}}/>
          <Stack.Screen name='Training' component={Training} options={{title: "Training"}}/>
      </Stack.Navigator>
  )
}