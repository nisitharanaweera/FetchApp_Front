import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'



const FormInput = ({ placeholder, title }) => {
  return (
    <>
        <Text style={{fontWeight:'bold'}}>{title}</Text>

        <TextInput
            placeholder={placeholder}
            style={styles.containerinput} 
        />
    </>
  );
};


const styles = StyleSheet.create({
    containerinput:{
        borderWidth:1,
        height:35,
        borderRadius:8,
        borderColor:'#1f1f80',
        paddingLeft:10,
        fontSize:16,
        marginBottom:20
        }
});
export default FormInput;
