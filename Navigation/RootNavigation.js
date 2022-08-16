import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet} from 'react-native';
import InfoHome2 from '../Screens/InfoHome2';
import InfoHome1 from '../Screens/InfoHome1';
import SplashSchreen from '../Screens/SplashSchreen';
import SignInScreen from '../Screens/SignInScreen';
import InfoHome from '../Screens/InfoHome';
import {enableFreeze} from 'react-native-screens';
import Tabnavigator from './Tabnavigator';
// import HighlightTab from './HomeScreen/HighlightTab';

enableFreeze(true);

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashSchreen">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashSchreen"
          component={SplashSchreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InfoHome1"
          component={InfoHome1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InfoHome"
          component={InfoHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InfoHome2"
          component={InfoHome2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabnavigator"
          component={Tabnavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
