import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const FormHeader = ({leftHeading, rightHeading}) => {
  return (
    <>
        <View style = {styles.container}>
          <Text style={styles.header}>{leftHeading}</Text>
          <Text style={styles.header}>{rightHeading}</Text>
        </View>

      </>
    );
}

const styles = StyleSheet.create({
    container:{flexDirection:'row', justifyContent:'center', alignItems:'center'},
    header:{fontSize:25, fontWeight:'bold', color: '#1f1f83'}
});

export default FormHeader;