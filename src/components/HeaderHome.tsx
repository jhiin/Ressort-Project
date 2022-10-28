import { View, Text , Image, SafeAreaView, TouchableOpacity,  } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
const HeaderHome = () => {
const navigation = useNavigation();

  return (
    
        
        <View style={{flexDirection: 'row' , justifyContent: 'space-between',alignItems: 'center', marginHorizontal: 10, marginVertical: 20 }}>
            <Image source={require('../../assets/Image/Ressort.webp')} style={{resizeMode: 'contain', width: 100, height: 100}}/>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('Appel')
            }}>
            <Foundation name="telephone" size={40} color="black" />  
            </TouchableOpacity >
               </View>
   
  )
}

export default HeaderHome