import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FormSubmitBtn = ({title}) => {
  return (
    <TouchableOpacity style ={styles.btncontainer}>
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
        backgroundColor:'rgba(31, 31, 128, 0.4)',
        borderRadius: 8,
        justifyContent:'center',
        alignItems: 'center'
    }
});