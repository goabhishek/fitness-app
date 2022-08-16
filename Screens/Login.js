import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        // value=''
        // onChangeText={{} =>}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          paddingVertical: 5,
          paddingHorizontal: 10,
          fontSize: 18,
          width: '40%',
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
