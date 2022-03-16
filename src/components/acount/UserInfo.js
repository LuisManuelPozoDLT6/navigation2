import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-elements'
import * as firebase from 'firebase'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { update } from 'lodash'

export default function UserInfo(props) {
  // console.log(props)
  const { userInfo: { uid, photoURL, displayName, email }, 
  toastRef, setLoading, setLoadingText } = props;

  const changeAvatar = async () => {
    // console.log("Cambiar Imagen")
    const resultsPermissions = await Permissions.askAsync(Permissions.CAMERA);
    //console.log(resultsPermissions)
    const resultsPermissionsCamera = resultsPermissions.permissions.camera.status;
    //console.log(resultsPermissionsCamera)

    if (resultsPermissionsCamera == "denied") {
      toastRef.current.show("Es necesario otorgar permisos");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 4]
      })
      if (result.cancelled) {
        toastRef.current.show("No has seleccionado una imagen")
      } else {
        uploadImage(result.uri)
          .then(() => {
            updatePhotoUrl();
            toastRef.current.show("Imagen cargada correctamente")  
            setLoading(false)
          })
          .catch((err) => {
            console.log(err)
            toastRef.current.show("Error al cargar la imagen")
            setLoading(false)
          })
      }
      // console.log(result)
    }

  };

  const uploadImage = async (uri) => {
    setLoadingText("Cargando imágen")
    setLoading(true)
    // console.log(uri)
    const response = await fetch(uri);
    // console.log(JSON.stringify(response))
    const blob = await response.blob();
    // console.log(JSON.stringify(blob))
    const ref = firebase.storage().ref().child(`avatar/${uid}`)
    return ref.put(blob);
  }


  const updatePhotoUrl = () => {
    setLoadingText("Cargando imágen")
    setLoading(true)
    firebase.storage().ref(`avatar/${uid}`).getDownloadURL()
      .then(async (response) => {
        const update = {
          photoURL: response
        }
        await firebase.auth().currentUser.updateProfile(update)
        console.log("Imagen actualizada!")
      })
      .catch((err) => {
        console.log(err)
        toastRef.current.show("Error al actualizar la imágen")
      })
  }

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        onEditPress={() => changeAvatar()}
        rounded
        size="large"
        showEditButton
        containerStyle={styles.userAvatar}
        source={
          photoURL ? { uri: photoURL }
            : require("../../../assets/avatar-default.jpg")
        }
      />
      <View>
        <Text style={styles.userName}>{displayName ? displayName : "Anónimo"}</Text>
        <Text style={styles.userEmail}>{email ? email : "Inicia sesión!"}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30
  },
  userAvatar: {
    marginRight: 20
  },
  userName: {
    fontWeight: "bold",
    paddingBottom: 5
  },
  userEmail: {

  }
})