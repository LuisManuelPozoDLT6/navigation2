import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements'

export default function ChangeDisplayNameForm(props) {
    //console.log(props)
    const { displayName, toastRef, setShowModal } = props;
    const [newDisplayName, setNewDisplayName] = useState(null)
    const [error, setError] = useState(null)

    const onsubmit = () => {
        // console.log(newDisplayName)
        if(!newDisplayName){
            setError("El campo no puede estar vacío")
        }else if(displayName ==newDisplayName){
            setError("Los nombres no pueden ser iguales")
        }else{
            setError("Okay!")
        }
    }
    return (
        <View style={styles.view}>
            <Input
                placeholder='Nombre y apellidos'
                containerStyle={styles.input}
                rightIcon={{
                    type: "material community",
                    name: "account-circle",
                    color: "#c2c2c2"
                }}
                onChange={(e) => setNewDisplayName(e.nativeEvent.text)}
                errorMessage={error}
                defaultValue={displayName || ""}
            />
            <Button
                title='Cambiar nombre'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnStyle}
                onPress={() => onsubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10
    },
    input: {
        marginBottom: 10
    },
    btnContainer: {
        marginTop: 20,
        width: "95%"
    },
    btnStyle: {
        backgroundColor: "#fcb823"
    }
})