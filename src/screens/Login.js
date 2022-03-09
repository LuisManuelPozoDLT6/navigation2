import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import FormLogin from '../components/acount/FormLogin'

export default function Login() {
    return (
        <ScrollView>
            <Image style={styles.logo} resizeMode="contain"
                source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png" }} />
            {/* <Image style={styles.logo} resizeMode="contain"
        source={{}}/>. */}
            <View style={styles.viewContainer}>
                <Text>Formulario LOGIN</Text>
                <FormLogin/>
                <CrearCuenta/>
                <Text>Registrarse</Text>
            </View>
            <Divider style={styles.divider} />
            <Text>Redes sociales</Text>
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
        alignSelf: "center"
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