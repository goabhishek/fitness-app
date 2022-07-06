import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import AntDesign from 'react-native-vector-icons/AntDesign';


// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle='light-content' />
      <View style={styles.header}>
   
        <View>
        
        <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
          <Text>Logo</Text>
          <Animatable.View
          animation='bounceIn'
          duraton='1500'
          source={{uri:'https://www.freepnglogos.com/uploads/sparkle-png/circle-fireworks-purple-sparkle-transparent-background-0.png'}}
          style={styles.logo}
          resizeMode='stretch'
        />
        <TouchableOpacity ><AntDesign name='search1' color={colors.text} size={25} /></TouchableOpacity>
        <TouchableOpacity><AntDesign name='bulb1' color={colors.text} size={25} /></TouchableOpacity>
        <TouchableOpacity><AntDesign name='user' color={colors.text} size={25} /></TouchableOpacity>
        {/* <View></View> */}
       </View>
        </View>
        <View style={{flexDirection:"row" ,justifyContent:"space-evenly"}}>
        <TouchableOpacity ><Text style={styles.tabs} >Tab 1</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.tabs} >Tab 2</Text></TouchableOpacity>

        <TouchableOpacity><Text style={styles.tabs} >Tab 3</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.tabs} >Tab 4</Text></TouchableOpacity>
        </View>
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
        <View>
          <Text>Today</Text>
        <View><Text style={styles.todaytab} >Today Tab</Text></View>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View>
          <Text>New Add</Text>
        <TouchableOpacity><Text style={styles.Newtab} >New add</Text></TouchableOpacity>
        </View>
        <View>
          <Text>Work</Text>
        <TouchableOpacity><Text style={styles.Worktab} >Work Tab</Text></TouchableOpacity>
        </View>
        </View>
        <View>
        <Text>Highlight</Text>
        <View><Text style={styles.Highlighttab} >Highlight Tab</Text></View>
        </View>
        
      </Animatable.View>
    </View>
  );
};

export default HomeScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.1;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#009387',
    width:"100%",
    height:"100%"

  },
  tabs:{backgroundColor:"pink"
  ,width:100,
  height:50,
  marginBottom:1
  },
  todaytab:{
    backgroundColor:"pink",
    width:350,
    height:100,
    marginBottom:10
  },
  Newtab:{
    backgroundColor:"pink",
    width:170,
    height:100,
    marginBottom:10,
   
  },
  Worktab:{
    backgroundColor:"pink",
    width:170,
    height:100,
    marginBottom:10
  },
  Highlighttab:{
    backgroundColor:"pink",
    width:350,
    height:170,
    marginBottom:10
  },
  header: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    width:"100%",
    marginTop:10,
    // margin:10

  },
  footer: {
    flex: 2,
    // backgroundColor: '#009387',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderBottomLeftRadius:30,
    // borderBottomRightRadius:30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    width:"100%"
  },
  logo: {
    // width: height_logo,
    // height: height_logo,
    height:50,
    width:50,
    // color:"#825185"
  },
  title: {
    color: '#009387',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,

  
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'black',
    fontWeight: 'bold',
  },
});
