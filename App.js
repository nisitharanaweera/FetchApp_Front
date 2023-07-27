import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View,Animated,Dimensions,Text } from 'react-native';
import FormHeader from "./app/components/FormHeader";
import FormSelectorBtn from './app/components/FormSelectorBtn';
import LoginForm from './app/components/LoginForm';
import SignupForm from './app/components/SignupForm';

const {width} = Dimensions.get('window');
export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const rightHeaderOpacity = animation.interpolate({
    inputRange:[0,width],
    outputRange:[1,0]
  })
  const leftHeadertranslateX = animation.interpolate({
    inputRange:[0,width],
    outputRange:[0,32]
  })
  const rightHeadertranslateY = animation.interpolate({
    inputRange:[0,width],
    outputRange:[0,+20]
  })
  const loginBtnColor = animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(31,31,128, 1)','rgba(31,31,128, 0.4)']
  })
  const signUpBtnColor = animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(31,31,128, 0.4)','rgba(31,31,128, 1)']
  })

  return (
    <View style={{flex:1, paddingTop:120}}>
      <View style ={{height:60}}>
      
        <FormHeader 
        leftHeading = 'Welcome '
        rightHeading = 'Back '
        rightHeaderOpacity={rightHeaderOpacity}
        leftHeadertranslateX={leftHeadertranslateX}
        rightHeadertranslateY={rightHeadertranslateY}
         />

      </View>
      <View style={{flexDirection:'row', paddingHorizontal: 20, marginBottom:20, paddingRight: 20}}>
        
        <FormSelectorBtn  
          style = {styles.borderLeft} 
          backgroundColor= {loginBtnColor} 
          title = 'Sign In'/>
          <View>
            <Text> </Text>
          </View>
        <FormSelectorBtn 
          style = {styles.borderRight} 
          backgroundColor= {signUpBtnColor} 
          title = 'Sign Up'/>

      </View>
      <ScrollView 
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:animation}}}],
          {useNativeDriver:false})}
      >
        <LoginForm/>
        <ScrollView>
             <SignupForm/>
        </ScrollView>
     
        
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
    borderRadius:30
    
  },
  borderRight: {
    borderRadius:30,
    

  },
});
