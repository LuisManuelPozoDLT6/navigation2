import { Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebaseApp } from '../utils/firebase';
import * as firebase from 'firebase';
import Login from './Login';
import Loading from '../components/Loading';

export default function index(props) {
  const { navigation } = props;
  const [login, setLogin] = useState(null)//guardar estado  del usuario

  useEffect(() => { //consultar el estado del usuario
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      !user ? setLogin(false) : setLogin(true)
    })
  }, []);

  if (login === null) return (<Loading isVisible={true} text={"Cargando"} />)

  if (login) {
    return (
      <View>
        <Text>Mi Index</Text>
        <Button title='Ir a Smart'
          onPress={() => navigation.navigate("Smart")}
        />
        <Button title='Ir al Perfil'
          onPress={() => navigation.navigate("Profile")}
        />
        <Button title='Ir a Training'
          onPress={() => navigation.navigate("Smart", { screen: "Training" })}
        />
        <Button
          title='Cerrar sesiòn'
          onPress={() => { firebase.auth().signOut() }} />
        
      </View>
    )
  } else {
    return (
      <Login />
    )

  }


}

