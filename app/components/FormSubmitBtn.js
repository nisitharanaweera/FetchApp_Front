import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FormSubmitBtn = ({title, submitting, onPress}) => {
    const backgroundColor= submitting ? 'rgba(31, 31, 128, 0.4)':'rgba(31, 31, 128, 1)';
  return (
    <TouchableOpacity onPress={submitting ? null: onPress} style ={[styles.btncontainer,{backgroundColor}]}>
        <Text style={{fontSize:18, color:'#ffffff',fontWeight:'bold'}}>
            {title}
        </Text>
    </TouchableOpacity>
   
  )
}

export default FormSubmitBtn

const styles = StyleSheet.create({
    btncontainer:{
        height:50,
        borderRadius: 30,
        justifyContent:'center',
        alignItems: 'center'
    }
});