// import * as React from 'react';
import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppForm from './components/AppForm';
import ImageUpload from './components/ImageUpload'
import UserProfile from './components/UserProfile';
import { Form } from 'formik';
import { useLogin } from './context/LoginProvider';
import DrawerNavigator from './DrawerNavigator';
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

const MainNavigator=()=> {
  const  {isLoggedIn} = useLogin()
  return isLoggedIn ? <DrawerNavigator/> : <StackNavigator/>;
};
export default MainNavigator;