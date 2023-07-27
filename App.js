import React from 'react';
import { ScrollView, Dimensions, StyleSheet, Text, TextComponent, TouchableWithoutFeedback, View } from 'react-native';
import FormHeader from "./app/components/FormHeader";
import FormSelectorBtn from './app/components/FormSelectorBtn';
import LoginForm from './app/components/LoginForm';
import SignupForm from './app/components/SignupForm';
 
export default function App() {
  return (
    <View style={{flex:1, paddingTop:80}}>
      <View style ={{height:60}}>
      
        <FormHeader 
        leftHeading = 'Welcome '
        rightHeading = 'Back '
         />

      </View>
      <View style={{flexDirection:'row', paddingHorizontal: 20}}>
        
        <FormSelectorBtn  
          style = {styles.borderLeft} 
          backgroundColor= 'rgba(27,27,51,1)' 
          title = 'Sign In'/>
        <FormSelectorBtn 
          style = {styles.borderRight} 
          backgroundColor= 'rgba(27,27,51,0.4)' 
          title = 'Sign Up'/>

      </View>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <LoginForm/>
        <SignupForm/>
        
      </ScrollView>
      
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
  borderLeft:{
    borderTopLeftRadius:10,
    borderBottomLeftRadius: 10
  },
  borderRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius:10,

  },
});
