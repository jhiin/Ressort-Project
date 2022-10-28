import { View, Text, SafeAreaView  , TouchableOpacity, Image,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const OurHistory = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      
        <View style={{margin:20,top:20}}>
          <TouchableOpacity onPress={()=>{
            navigation.goBack()
          }}>
          <Ionicons name="chevron-back" size={30} color="black"  />     
           </TouchableOpacity>
          
        </View>
          <View style={{marginHorizontal: 10, Top: 70}}>
            <View style={{width: '101%' , height: 300, borderWidth: 0.2,borderRadius:10,}}>
              <Image  source={require('../../assets/Image/44.gif')} style={{width: '100%', height: 300}}/>
            </View>
          </View>
          <View style={{margin: 20}}>
            <Text style={{fontSize: 30, fontWeight: 'bold' ,}}>
              Note histoire
            </Text>
            <View style={{width: '100%' , height:300, borderWidth: 0.2,borderRadius:10,top:10}}>
            <Text style={{top: 20, textAlign: 'center' , }}>Fondée en 1980, la société CASA RESSORTS est une entreprise spécialisée dans la conception et la fabrication de ressorts de qualité. Notre objectif est de vous apporter notre savoir faire et de développer en permanence la solution la plus satisfaisante tant en matière de qualité, de prix que de respect des délais.   

       Avec un bureau d’étude entièrement informatisé, CASA RESSORTS a développé les notions de création et de conception pour pouvoir gérer les besoins les plus spécifiques de chacun de ses clients. ON assume aujourd’hui toute l’importance de cette prise en charge en amont de la production, et permet par le biais d’ingénieurs, d’assurer des missions de conseil et de réinventer chaque jour un métier qui ne cesse d’évoluer.</Text>

        </View>
          </View>
        
              <View style={{padding:15}}>
              <Text style={{fontSize: 24,fontWeight:'bold',}}>Secteurs d'activites:</Text>
          </View>
          <View style={{margin: 20, justifyContent: 'center' , alignItems: 'center', bottom:15}}>
          <View style={{width: '100%' , height:300, borderWidth: 0.2,borderRadius:10,}}>
            <View style={{top: 6, margin: 5}}>
              <Text style={styles.text}>•Ferroviaire</Text>
              <Text style={styles.text}>•Aeronautique</Text>
              <Text style={styles.text}>•Automobile</Text>
              <Text style={styles.text}>•Agricole</Text>
              <Text style={styles.text}>•Medical</Text>
             <Text style={styles.text}>•Textile</Text>
             <Text style={styles.text}>•Sport</Text>
             <Text style={styles.text}>•Matériels electriques</Text>
             <Text style={styles.text}>•Robinetterie</Text>
             <Text style={styles.text}>•Bâtiment</Text>
            <Text style={styles.text}>•Industrie mecanique</Text>
            <Text style={styles.text}>•Serrures</Text>
            <Text style={styles.text}>•Maritime</Text>
            <Text style={styles.text}>•Transport</Text>
            <Text style={styles.text}>•Loisirs</Text>
            </View>
            </View>
           </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 15,
    fontWeight: '600'
  }
})

export default OurHistory