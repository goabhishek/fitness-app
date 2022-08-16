import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

const LivsScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>Logo</Text>
          <View style={{flexDirection: 'row'}}>
            <Animatable.View
              animation="bounceIn"
              duraton="1500"
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeKt3zhpqsJYsvQwUC43vBmv0GtibnVg4wA&usqp=CAU',
              }}
              style={styles.logo}
              resizeMode="stretch"
            />
          </View>
        </TouchableOpacity>
      </View>

      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          Stay connected with LivsScreen
        </Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
           

            <Text style={styles.textSign}>Get Started</Text>

            <MaterialIcons name='navigate-next' color='gray' size={50} />
          
          </TouchableOpacity> */}
        </View>
      </Animatable.View>
    </View>
  );
};

export default LivsScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.08;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // marginTop:40,
    margin: 20,
  },
  footer: {
    flex: 3,
    // backgroundColor: '#009387',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderBottomLeftRadius:30,
    // borderBottomRightRadius:30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
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
