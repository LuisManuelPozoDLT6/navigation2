import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

export default function Profile() {
  return (
    <View style={styles.userInfo}>
      <Text>Informaión de usuario</Text>
      <Text>Opciones de cuenta</Text>
      <Button
        title={"Cerrar sesión"}
        buttonStyle={styles.btnCloseSesion}
        titleStyle={styles.btnTitle}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

