import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList , Image, Dimensions } from "react-native";
import React from "react";
import HeaderHome from "../components/HeaderHome";
import DATA from "../constant/data";
import SwiperImage from "../components/SwiperImages";
import DATA1 from "../constant/DATA2";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';

const WidthW = Dimensions.get('screen').width;


const HomeScreen = () => {

  const navigation = useNavigation();



  const Renedero = ({item}) =>{
    return(

      <View style={{alignItems: 'center' , justifyContent: 'center', }} >
        <View style={{width: '100%' , height: 320, borderWidth: 0.2, marginVertical: 10,borderRadius:10}}>
        <Image  source={item.image} style={{width: '100%', height: 220 , borderRadius:10}} resizeMode="cover" />
        <Text style={{fontWeight: 'bold' , fontSize: 16, margin: 5}}>{item.title}</Text>
        <Text style={{textAlign: 'center'}}>{item.title1}</Text>
        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView   >
        <HeaderHome />
        <View style={{ marginHorizontal: 15, alignItems: 'center', }}>
          <View style={{ backgroundColor: 'white', height: 220, width: '105%', bottom: 10, borderRadius: 5, borderWidth: 0.5, }}>
            <SwiperImage />
          </View>
        </View>
        <TouchableOpacity style={{ padding: 10 }} onPress={() => {
          navigation.navigate('Ourhistory')
        }}>
          <View style={styles.button1}>
            <Text style={styles.text}>OUR HISTORY</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{left: 160}} onPress={()=>{
          navigation.navigate('OurProducts')
        }}>
          <View style={styles.button2}>
            <Text style={styles.text}>CATALOG</Text>
          </View>
        </TouchableOpacity >
        <View>
        <View style={{ margin: 10,}}>
              <FlatList  
              data={DATA1}              
              renderItem={Renedero}
              scrollEnabled={false}

              />          
        </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  button1: {
    backgroundColor: 'black',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderTopRightRadius:50,
    borderTopLeftRadius:50
   
  },
  button2:{
     backgroundColor: 'black',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderTopRightRadius:50,
    borderTopLeftRadius:50  
  }

});

export default HomeScreen;
