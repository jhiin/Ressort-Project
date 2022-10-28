import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 

const Appel = ({navigation}) => {
  return (
 <View style={{flex:1,}}>
    <View style={{margin:20,bottom:-30}}>
          <TouchableOpacity onPress={()=>{
            navigation.goBack()
          }}>
          <Ionicons name="chevron-back" size={30} color="black"  />     
           </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center' ,bottom:-50}}>
                <Text style={styles.text}>contact us</Text>
                <Text style={{padding: 10, fontSize:18,fontWeight:'400'}}>05-22-28-49-49</Text>
            <Text style={{padding: 10, fontSize:18,fontWeight:'400', bottom:15}}>casaressorts@laposte.net</Text>    
                <Text style={styles.text}>Location</Text>
                <Text style={{ fontSize:18,fontWeight:'400'}}>18, Hay Tissir I, rte Oulad</Text>
                <Text style={{ fontSize:18,fontWeight:'400'}}>Ziane Al Madina Al Jadida</Text>
                <Text style={{ fontSize:18,fontWeight:'400'}}>Casablanca - Maroc</Text>
    </View>
    <View style={{top: 100, alignItems: 'center' , justifyContent: 'center'}}>
        <View style={{width: '90%' , height:150, borderWidth: 0.3,justifyContent:'flex-start', alignItems: 'center',borderRadius: 10}}>
           <Text style={styles.text}>CASA SPRINGS COMPANY</Text>
            <View style={{top: 20, }}>
            <Text style={{textAlign:'center',fontSize: 15}}>
We are the number one manufacturer of springs in casablanca. We are proud to have been working in this field for years.</Text>
</View>
        </View>
    </View>
 </View>
    
  )
}
const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Appel