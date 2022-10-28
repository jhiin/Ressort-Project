import { View, Text, StyleSheet, SafeAreaView , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import colots from '../constant/colots';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';



const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (

    <SafeAreaView style={styles.contianer}>
        <View style={styles.imageSwiper}>
            <Image source={require('../../assets/Image/Ressort.webp')} style={{width: 160,height: 100}}/>
        </View>
        <Swiper style={styles.swiperStyle} autoplay={true} showsPagination={false}>
          <View style={styles.slide1}>
            <Image source={require('../../assets/Image/ressort1.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={require('../../assets/Image/ressort2.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide1}>
            <Image source={require('../../assets/Image/ressort3.jpg')} style={styles.image} />
          </View>
        </Swiper>
        <View style={{bottom:120, alignItems: 'center',}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>The specialist in the manufacture </Text>
        <Text style={{fontSize:19, fontWeight: '500'}}>of springs</Text>
        <Text style={{top: 50, fontSize:25 , fontWeight: 'bold', }}>let`s</Text>
        </View>
        <TouchableOpacity style={{alignItems: 'center' , justifyContent: 'center'}} onPress={()=>navigation.navigate('HomeScreen')}>
          
              <View style={{bottom:50 , backgroundColor : 'black' , width: 250,height:60 , alignItems: 'center', justifyContent: 'center', borderRadius: 20,}}>
                  
                  <Text style={styles.text}>GET STARTED</Text>
              </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    contianer:{
        flex:1 ,
        backgroundColor: colots.light.background,
    },
    imageContainer : {
        alignItems: 'center',
       
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
      },
      imageSwiper: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 40
        
      },
      slide1:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
      },
      image:{
        width: 250,
        height: 200,
      },
      swiperStyle:{
        bottom: 30
      }
      
 
})

export default WelcomeScreen