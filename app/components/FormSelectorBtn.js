import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';


const FormSelectorBtn = ({backgroundColor, title, style, onPress}) => {
  return (
  <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View style={[styles.container,style, {backgroundColor}]}>
          <Text style={styles.title}>{title}</Text>
        </Animated.View>
  </TouchableWithoutFeedback>
  
  );
};



const styles = StyleSheet.create({
    container : {
      height:45,
        width:'50%', backgroundColor:'#2d2d80',
        justifyContent:'center',
         alignItems:'center'
        },
    title:{color:'white', fontSize:16}
});
export default FormSelectorBtn;