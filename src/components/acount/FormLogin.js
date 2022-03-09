import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Icon, Button } from 'react-native-elements'

export default function FormLogin() {
  return (
    <View style={styles.formContainer}>
      <Input
      placeholder='Correo Electrónico'
      containerStyle={styles.inputForm}
      rightIcon={
        <Icon
            type='material-community'
            name='at'
            iconStyle={styles.icon}/>}/>
      <Input
      placeholder='Contraseña'
      containerStyle={styles.inputForm}
      password={true}
      secureTextEntry={true}
      rightIcon={
        <Icon
            type='material-community'
            name='eye-outline'
            iconStyle={styles.icon}/>}/>
        <Button
        title={"Iniciar sesión"}
        containerStyle={styles.containerBtn}
        buttonStyle={styles.btnLogin}/>

    </View>
  )
}

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center", 
        marginTop:30
    },
    inputForm:{
        marginTop:20,
        width:"100%"
    },
    icon:{
        color:"#010101"
    },
    containerBtn:{
        margin:20,
        width:"95%"
    },
    btnLogin:{
        backgroundColor:"#fcb823"
    }
})