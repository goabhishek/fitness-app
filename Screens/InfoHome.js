import { View, Text, StyleSheet, StatusBar, TouchableOpacity, CheckBox } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const InfoHome = ({ navigation }) => {
  const [checked, setChecked] = useState('first');
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name='close' color={colors.text} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.text_header}>Collect Basic</Text>
          <Text style={styles.text_header}> Information 1!</Text>
        </View>

        <Animatable.View
          animation='fadeInUpBig'
          style={[
            styles.footer,
            {
              backgroundColor: colors.background,
            },
          ]}
        >
          <View>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000',
                },
              ]}
            >
              Select Gender
            </Text>
          </View>
        <View style={styles.radiobtn}>
          <View  >
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000',
                },
              ]}
            >
              Male
              {/* Radio Button */}
              <RadioButton
                value='first'
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')} 
              />{' '}
            </Text>
          </View>
          <View >
            <View>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                Female
                {/* Radio Button */}
                <RadioButton
                  value='second'
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
              </Text>
            </View>
            </View>
            <View >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                Others
                {/* Radio Button */}
                <RadioButton
                  value='third'
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('third')}
                 
                />{' '}
              </Text>
            </View>
          </View>

         
          <View>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000',
                  marginTop: 40,
                },
              ]}
            >
              How Many Times Do You Workout Perweek ?
            </Text>
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
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                0 - 1
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
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                2 - 4
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
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                5 +
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.button,
              {
                flexDirection: 'row',
              },
            ]}
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
              onPress={() => navigation.navigate('InfoHome1')}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                Skip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: '#000',
                  borderWidth: 1,
                  marginTop: 15,
                  marginLeft: 110,
                },
              ]}
              onPress={() => navigation.navigate('InfoHome1')}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000',
                  },
                ]}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
          {/* <Text style={{ color: colors.text }}>Home Screen</Text> */}
          {/* <Button title='Go to details screen' onPress={() => navigation.navigate('Sign-in Page')} /> */}
        </Animatable.View>
      </View>
    </>
  );
};

export default InfoHome;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#009387',
    width: '100%',
  },
  header: {
    // flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    // flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backbutton: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#009387',
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    marginRight: 30,
    width: '30%',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    borderRadius: 30,
    // borderColor: '#000',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  radiobtn: {
    // display: 'flex',
    flexDirection: 'row',
  },
});
