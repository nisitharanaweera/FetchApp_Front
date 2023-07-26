import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const FormSelectorBtn = ({backgroundColor,title}) => {
  return (
  <TouchableWithoutFeedback>
        <View styles={[styles.container, {backgroundColor}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
  </TouchableWithoutFeedback>
  
  );
};

export default FormSelectorBtn

const styles = StyleSheet.create({
    container : {height:45,
        width:'50%', backgroundColor:'#2d2d80',
        justifyContent:'center',
         alignItems:'center'
        },
    title:{color:'white', fontSize:16}
});