/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import SignOutStack from './src/routes/SignOutStack'
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  React.useEffect(() => {SplashScreen.hide()})
  return (
    <SignOutStack/>
  );
};


export default App;
