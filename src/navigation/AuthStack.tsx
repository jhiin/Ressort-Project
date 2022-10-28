import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import OurHistory from '../screens/OurHistory';
import OurProducts from '../screens/OurProducts';
import Appel from '../components/Appel';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} 
      options={{headerShown: false}}
      />
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false }} />
      <Stack.Screen name='Ourhistory' component={OurHistory} options={{headerShown: false }} />
      <Stack.Screen name='OurProducts' component={OurProducts} options={{headerShown: false }} />
      <Stack.Screen name='Appel' component={Appel} options={{headerShown: false }} />

    </Stack.Navigator>
  );
}

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}