import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/validations'
import { isEmpty, size } from 'lodash'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'
import Loading from '../Loading'

export default function FormRegister(props) {
    //console.log(props)
    const navigation = useNavigation();
    const {toastRef} = props;
    const [showPass, setShowPass] = useState(false)
    const [showPassRepeat, setShowPassRepeat] = useState(false);
    const [formData, setFormData] = useState(defaultFormValues())
    // console.log(formData)
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        // console.log(formData)
        // console.log(validateEmail(formData.email))
        if (isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.passwordRepeat)) {
            // console.log("Todos los datos son obligatorios!")
            toastRef.current.show("Todos los datos son obligatorios");
        }else if(!validateEmail(formData.email)){
            // console.log("Email no vàlido")
            toastRef.current.show("Email no valido")
        }else if(size(formData.password) < 6 ){
            // console.log("Deben ser al menos 6 caracteres")
            toastRef.current.show("Deben ser al menos 6 caracteres")
        }else if(formData.password != formData.passwordRepeat){
            // console.log("Las contraseñas deben ser iguales!")
            toastRef.current.show("Las contraseñas deben ser iguales")
        }else{
            setLoading(true)
            firebase.auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(response =>{
                setLoading(false)
                navigation.navigate("index")
            })
            .catch(err=>{
                setLoading(false)
                console.log(err)
                toastRef.current.show("El correo ya fue registrado")
            })
        }
    }

    const capturarDatos = (e, type) =>{
        // console.log(type)
        // console.log(e.nativeEvent.text)
        setFormData({...formData, [type]:e.nativeEvent.text})
    }

    return (
        <View style={styles.formContainer}>
            <Input
            onChange={(e) => capturarDatos(e, "email")}
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type='material-community'
                        name='at'
                        iconStyle={styles.icon} />
                } />
            <Input
            onChange={(e) => capturarDatos(e, "password")}
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPass ? false : true}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={showPass ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPass(!showPass)} />
                } />
            <Input
            onChange={(e) => capturarDatos(e, "passwordRepeat")}
                placeholder="Repetir contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassRepeat ? false : true}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={showPassRepeat ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPassRepeat(!showPassRepeat)}
                    />
                } />
            <Button
                title="Registrar"
                containerStyle={styles.containerBtnRegister}
                buttonStyle={styles.btnRegister}
                onPress={() => onSubmit()} />
                <Loading isVisible={loading} text={"Creando cuenta"} />
        </View>
    )
}

function defaultFormValues() {
    return {
        email: "",
        password: "",
        passwordRepeat: ""
    }
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 30
    },
    inputForm: {
        width: "100%",
        marginTop: 20
    },
    containerBtnRegister: {
        marginTop: 20,
        width: "95%"
    },
    btnRegister: {
        backgroundColor: "#fcb823"
    },
    icon: {
        color: "#c1c1c1"
    }
})