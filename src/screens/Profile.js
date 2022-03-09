import { Text, View, Button } from 'react-native'
import React from 'react'

export default function profile(props) {
  const {navigation}=props;
  return (
    <View>
      <Text>Mi Profile✨</Text>
      <Button title='Ir al Inicio'
      onPress={()=>navigation.navigate("Index")}
      />
    </View>
  )
}

