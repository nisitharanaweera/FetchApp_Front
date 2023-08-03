import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppForm from './app/components/AppForm';
import ImageUpload from './app/components/ImageUpload';
import UserProfile from './app/components/UserProfile';
const Stack = createStackNavigator();

const StackNavigator =()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen component={AppForm} name='Appform'/>
      <Stack.Screen component={ImageUpload} name='ImageUpload'/>
      <Stack.Screen component={UserProfile} name='UserProfile'/>

    </Stack.Navigator>

  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}