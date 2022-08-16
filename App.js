import React from 'react';
import {StyleSheet} from 'react-native';
import RootNavigation from './Navigation/RootNavigation';
// import { Provider } from 'react-redux';
// import RootNavigation from './Navigation/RootNavigation';
import Login from './Screens/Login';
// import { Store } from '';

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <RootNavigation />
      {/* </Provider> */}
    </>
  );
};
export default App;

const styles = StyleSheet.create({});
