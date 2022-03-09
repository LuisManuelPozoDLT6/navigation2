import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/Index'
import { Icon } from 'react-native-elements'
import Training from '../screens/Training'
import Register from '../screens/Register'

const Stack = createStackNavigator();

export default function indexStack(props) {

  const { navigation } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen name='Index'
        component={Index}
        options={{
          headerShown:false,
          title: "Inicio",
          headerLeft: () =>
            <Icon
              onPress={() => navigation.openDrawer()}
              type='material-community'
              name='menu'
              size={22}
              color={"black"} />
        }} />
      <Stack.Screen name='register' component={Register} options={{title: "Registrate"}}/>
    </Stack.Navigator>
  )
}