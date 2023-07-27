import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'



const FormInput = (props) => {
    const { placeholder, label,error } = props;
  return (
    <>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:5}}>
        <Text style={{fontWeight:'bold'}}>{label}</Text>
        {error ?<Text style={{color:'red', fontSize:16}}>{error}</Text>: null}
        </View>

        <TextInput
            {...props}
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
