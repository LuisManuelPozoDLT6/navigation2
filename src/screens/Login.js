import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, {useRef} from 'react'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import FormLogin from '../components/acount/FormLogin'
import Toast from 'react-native-easy-toast'

export default function Login() {
    const toastRef = useRef();
    return (
        <ScrollView>
            <Image style={styles.logo} resizeMode="contain"
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png" }} />
            {/* <Image style={styles.logo} resizeMode="contain"
        source={{}}/>. */}
            <View style={styles.viewContainer}>
                <Text>Formulario LOGIN</Text>
                <FormLogin toastRef={toastRef}/>
                <CrearCuenta/>
                <Text>Registrarse</Text>
            </View>
            <Divider style={styles.divider} />
            <Text>Redes sociales</Text>
            <Toast ref={toastRef} opacity={0.9} position={"center"}/>
        </ScrollView>
    )
}

function CrearCuenta(){
    const navigation = useNavigation();
    return(
        <Text style={styles.textRegister}>¿Aùn no tienes cuenta?{" "}
            <Text 
            style={styles.btnRegistrar}
            onPress={() => navigation.navigate('register')}>
                Registrate aquì!</Text>
        </Text>
    )
}

const styles = StyleSheet.create({

    logo: {
        height: 100,
        width: 200,
        alignSelf: "center",
        marginTop:50
    },
    viewContainer:{
        marginLeft:40,
        marginRight:40
    },
    textRegister:{
        marginTop:15,
        marginLeft:10, 
        marginRight:10
    },
    btnRegistrar:{
        color:"#fcb823",
        fontWeight:"bold"
    },
    divider:{
        backgroundColor:"#fcb823",
        margin:48
    }
})