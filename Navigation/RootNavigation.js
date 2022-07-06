import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import SplashScreen from '../Screens/SplashSchreen'
// import Home from '../Screens/Home'
// import InfoHome1 from '../Screens/InfoHome1'
// import InfoHome2 from '../Screens/InfoHome2'
// import SignInScreen from '../Screens/SignInScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
     
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      {/* <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="InfoHome1" component={InfoHome1} />
      <Stack.Screen name="InfoHome2" component={InfoHome2} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})