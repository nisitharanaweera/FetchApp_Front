import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FormHeader from "./app/components/FormHeader";
import FormSelectorBtn from './app/components/FormSelectorBtn';
 
export default function App() {
  return (
    <View style={{flex:1, paddingTop:120}}>
      <View style ={{height:100}}>
      
        <FormHeader 
        leftHeading = 'Welcome '
        rightHeading = 'Back '
         />

      </View>
      <View style={{flexDirection:'row', padding:20}}>
        
        <FormSelectorBtn backgroundColor= 'rgba(56, 56, 117, 1)' title = 'Sign In'/>
        <FormSelectorBtn backgroundColor= 'rgba(27,27,51,0.4)' title = 'Sign Up'/>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
