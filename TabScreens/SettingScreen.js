import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';

const SettingScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle='light-content' />
      <View style={styles.header}>
        <TouchableOpacity>
        <Text>Logo</Text>
        <View ><
          Animatable.View
          animation='bounceIn'
          duraton='1500'
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeKt3zhpqsJYsvQwUC43vBmv0GtibnVg4wA&usqp=CAU'}}
          style={styles.logo}
          resizeMode='stretch'
        />
        
       </View>
       
        </TouchableOpacity>
        <View><Text style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>Settings</Text></View>
        <View><Text style={styles.text}>Manage Your App Setting</Text></View>

        
      </View>
     
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation='fadeInUpBig'
      >
        <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: '#000',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
              onPress={() => navigation.navigate('HighlightTab')}
            >
              <Feather name='check-circle' color='green' size={20} style={styles.iconTab} />
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                Notification
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: '#000',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
              
            >
              <Feather name='lock' color={colors.text} size={20} style={styles.iconTab} />
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                Privacy Setting
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: '#000',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
              
            >
              <FontAwesome name='user-o' color={colors.text} size={20} style={styles.iconTab} />
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: '#000',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
              
            >
              <AntDesign name='setting' color={colors.text} size={20} style={styles.iconTab}  />
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                Advance Setting
              </Text>
            </TouchableOpacity>

       
      </Animatable.View>
    </View>
  );
};

export default SettingScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.08;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    width:"100%",
    height:"100%"

  },
  header: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    width:"100%",
    marginTop:20,
    margin:20

  },
  footer: {
    flex: 3,
    // backgroundColor: '#009387',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderBottomLeftRadius:30,
    // borderBottomRightRadius:30,
    paddingVertical: 30,
    paddingHorizontal: 30,
    width:"100%"
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#009387',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text:{
    // color: '#009387',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,

  
  },
  signIn: {
    width: 350,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',

    
  },
  textSign: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft:60
  },
  iconTab:{
    marginLeft:60
  }
});
