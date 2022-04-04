import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import MapView, {Marker, Circle} from 'react-native-maps'

export default function Location() {
    //@18.8502885,-99.2029242
    const [region, setRegion] = useState({
        latitude:18.8502885,
        longitude:-99.2029242,
        latitudeDelta:0.0522,
        longitudeDelta:0.0521
    });
    const [marker, setMarker] = useState({
        latitude:18.8502885,
        longitude:-99.2029242
    })
  return (
    <View style={styles.container}>
      <MapView
      style={styles.mapa}
      region={region}
      onPress={(e)=>{setRegion(e.nativeEvent.coordinate), setMarker(e.nativeEvent.coordinate)}}
      onRegionChange={(r)=>{console.log("reg->"+r.latitude)}}
      onRegionChangeComplete={(r)=>{console.log(r)}}
      >
          <Marker
          key={1}
          coordinate={marker}
          title={"Mi primer marcador!"}
          description={"Hecho en clase de apps!"}
        //   image={{uri:"https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png"}}
          >
              <Image source={{
                  uri:"https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png"
              }}
              style={styles.marcador}
              />
          </Marker>
          <Circle
          radius={1000}
          center={marker}
          strokeWidth={3}
          strokeColor={"red"}
          fillColor={"rgba(255,0,0,0.05)"}
          />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    mapa:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },
    marcador:{
        width:100,
        height:50
    }
})