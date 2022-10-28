import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View , Image } from 'react-native'
 
import Swiper from 'react-native-swiper'
 
const styles = StyleSheet.create({
image:{
    width: '100%',
    height: 200,
    
}
})
 
const SwiperImage = () => {
    return (
      <Swiper style={styles.wrapper} autoplayTimeout={1} autoplay={true} showsPagination={false}>
        <View style={{alignItems: 'center' , justifyContent: 'center'}}>
          <Image source={require('../../assets/Image/1.webp')} style={styles.image} resizeMode="contain"/>
        </View>
        <View >
        <Image source={require('../../assets/Image/2.webp')} style={styles.image} resizeMode="contain"/>
        </View>
        <View >
        <Image source={require('../../assets/Image/3.webp')} style={styles.image} resizeMode="contain"/>
        </View>
      </Swiper>
    )
}

export default SwiperImage;


 
