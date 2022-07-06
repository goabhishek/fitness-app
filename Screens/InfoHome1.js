import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity,TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native'; 
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InfoHome1 = ({ navigation }) => {
  const [activeTab, setActivetab] = useState('Delivery');
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
          <Text style={styles.text_header}> Information 2!</Text>
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
              How tell are you ?
            </Text>
            <TextInput
        style={styles.input}
       
        // value={number}
        placeholder="Enter Hight"
        keyboardType="numeric"
      />
          </View>
          <View >
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000',
                  marginTop: 15,
                },
              ]}
            >
              How much do you weight ?
            </Text>
            <TextInput
        style={styles.input}
        
        // value={number}
        placeholder="Enter Weight"
        keyboardType="numeric"
      />
          </View>

          <View>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000',
                  marginTop: 15,
                },
              ]}
            >
             Are You Veg or Non-vegeterian ?
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 35 }}>
      {/* Headerbutton */}
      <HeaderButton
        text='Vegeterian'
        btncolor='black'
        textColor='white'
        activeTab={activeTab}
        setActivetab={setActivetab}
      />
      <HeaderButton
        text='non-vegeterian'
        btncolor='white'
        textColor='black'
        activeTab={activeTab}
        setActivetab={setActivetab}
      />

      {/* Headerbutton */}
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
                  // marginTop: 15,
                },
              ]}
              onPress={() => navigation.navigate('InfoHome2')}
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
                  // marginTop: 15,
                  marginLeft: 110,
                },
              ]}
              onPress={() => navigation.navigate('InfoHome2')}
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

export default InfoHome1;



const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        
      }}
      onPress={() => props.setActivetab(props.text)}
    >
      <Text style={{ color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: '900' }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);




const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#009387',
    width: '100%',
  },
  header: {
    // flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
    paddingBottom: 100,
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
    // marginTop: 10,
    backgroundColor: '#009387',
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
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
  input:{
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#009387',
    borderRadius: 10,
  }
});
