import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './app/MainNavigator';
import LoginProvider from './app/context/LoginProvider';

import { AppRegistry } from 'react-native';
// import App from './App'; 
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);


export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}
