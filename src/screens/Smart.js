import { Text, View, Button } from 'react-native'
import React from 'react'

export default function smart(props) {
  const {navigation}=props;
  return (
    <View>
      <Text>Mi Smart</Text>
      <Button title='Ir a Training'
      onPress={()=>navigation.navigate("Training")}
      />
    </View>
  )
}

