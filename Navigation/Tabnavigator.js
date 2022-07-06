import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../TabScreens/HomeScreen';
import SettingScreen from '../TabScreens/SettingScreen';
import LivsScreen from '../TabScreens/LivsScreen';
import PlanScreen from '../TabScreens/PlanScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { enableFreeze } from 'react-native-screens';

enableFreeze(true);

const Tab = createBottomTabNavigator();
const Tabnavigator = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarShowLabel:false, 
      tabBarStyle : {backgroundColor:"#626144"},
      tabBarInactiveTintColor:"#000",
      tabBarActiveTintColor:"yello",
      }} >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: (color,size) => (
            <Ionicons name='home-outline'  size={25} />
          ),
          headerShown: false
        }}/>
        <Tab.Screen name="SettingScreen" component={SettingScreen} options={{
          tabBarIcon: (color,size) => (
            <Ionicons name='md-settings'  size={25} />
          ),
          headerShown: false
        }} />
        <Tab.Screen name="LivsScreen" component={LivsScreen} options={{
          tabBarIcon: (color,size) => (
            <Fontisto name='livestream'  size={25} />
          ),
          headerShown: false
        }} />
        <Tab.Screen name="PlanScreen" component={PlanScreen} options={{
          tabBarIcon: (color,size) => (
            <AntDesign name='calendar'  size={25} />
          ),
          headerShown: false
        }} />
      </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default Tabnavigator

const styles = StyleSheet.create({})