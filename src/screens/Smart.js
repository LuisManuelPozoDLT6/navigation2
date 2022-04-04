import { Text, View, Button, StyleSheet , ImageBackground, Image} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { map } from 'lodash';
import Carousel from 'react-native-snap-carousel';
import { color } from 'react-native-reanimated';
import { Icon, Rating } from 'react-native-elements';
import Modal from "../components/Modal"
import Video from '../components/Video';

export default function smart(props) {
  const { navigation } = props;
  const [data, setData] = useState([])
  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [renderComponent, setRenderComponent] = useState(null)

  const getExercises = async () => {
    try {
      const response = await fetch("http://192.168.62.185/smart/ejercicio", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      // console.log(json)
      setData(json);
    } catch (error) {
      console.log(error)
    }
  };
  //importar
  useEffect(() => {
    getExercises();
    console.log(data)
  }, [])

  const ratingComplete = (rating) =>{
    console.log("Nuevo Rating: "+rating)
  }

  const playVideo = (idVideo) => {
    setShowModal(true)
    setRenderComponent(<Video idVideo={idVideo}/>)
  }

  const renderItem =({item, index})=>{
    return (
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{
            uri:item.imagen
          }}
        />
        <Icon
          type="material-community"
          name="youtube"
          color="black"
          size={50}
          onPress={() => playVideo(item.video)}
        />
        <Text style={styles.exercise}>{item.ejercicio}</Text>
        <Text style={styles.descripcion}>{item.descripcion}</Text>
        <Rating
        type="star"
        fractions={1}
        startingValue={parseFloat(item.puntuacion)}
        // readonly
        imageSize={25}
        style={styles.rating}
        onFinishRating={ratingComplete}
        />
        <Text style={styles.points}>{item.puntuacion}/5</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackground}
        source={require("../../assets/lana.jpg")}
        resizeMode="cover"
      >
        <Carousel
        layout='default'
        ref={carouselRef}
        data={data}
        sliderWidth={400}
        itemWidth={400}
        onSnapToItem={(index) =>setActiveIndex({activeIndex:index})}
        renderItem={renderItem}

        />
        
      </ImageBackground>
      {renderComponent && (
          <Modal isVisible={showModal} setIsVisisble={setShowModal}>
          {renderComponent}
        </Modal>
        )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  card:{
    backgroundColor:"#fff",
    borderRadius:10,
    height:"75%",
    padding:40,
    marginTop:50,
    marginHorizontal:25,
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1.5,
    borderColor:"#fcb823"
  },
  img:{
    height:"65%",
    width:"95%",
    borderRadius:5
  },
  exercise:{
    fontSize:25,
    fontWeight:"bold"
  },
  descripcion:{
    fontSize:16
  },
  rating:{
    paddingVertical:10
  },
  points:{
    fontWeight:"bold"
  }
})

