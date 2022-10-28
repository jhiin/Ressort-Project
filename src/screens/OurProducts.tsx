import { View, Text , FlatList, Dimensions,  Image, TouchableOpacity , StyleSheet, SafeAreaView,} from 'react-native'
import React from 'react'
import DATA3 from '../constant/DATA3';
import { ScrollView } from 'react-native-virtualized-view';
let deviceHeight = Dimensions.get('window').height;
let deviceWidht = Dimensions.get('window').width;
import { Ionicons } from '@expo/vector-icons'; 

const RenderDAta = ({item}) =>{
  return(
    <View style={{alignItems: 'center' , justifyContent: 'center' , margin: 10, marginHorizontal: 4}}>
     <View style={{width: deviceWidht, height: 300, borderWidth: 0.2}}>
      <Image  source={item.images} style={{width: deviceWidht, height:260}} resizeMode="cover"/>
      <View style={{padding:10 , backgroundColor: '#F1FAEE'}}>
      <Text style={styles.title}>{item.title}</Text>

      </View>
      </View>
    </View>
  )
}

const OurProducts = ({navigation}) => {

  return (
    <ScrollView>
        <SafeAreaView style={{flex:1, marginLeft: 5}}>
          
        <View style={{margin:1,top:1}}>
          <TouchableOpacity onPress={()=>{
            navigation.goBack()
          }}>
          <Ionicons name="chevron-back" size={30} color="black"  />     
           </TouchableOpacity>
         
          <View style={styles.box}>
           <FlatList
            data={DATA3}
            renderItem={RenderDAta}
             keyExtractor={(item) => item.id}
             scrollEnabled={false}
            />
          </View>
          </View>
        </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
box:{},
title:{
  fontSize: 20,
  fontWeight: 'bold'
}

})


export default OurProducts