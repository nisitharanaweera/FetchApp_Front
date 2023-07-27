import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';


const FormHeader = ({leftHeading, rightHeading, leftHeadertranslateX= 40,rightHeadertranslateY = -20,rightHeaderOpacity = 0}) => {
  return (
    <>
        <View style = {styles.container}>
          <Animated.Text style={[styles.header, 
                      { transform: [{translateX: leftHeadertranslateX}]}]}>
                {leftHeading}</Animated.Text>
          
          <Animated.Text style={[styles.header,
                      {opacity:rightHeaderOpacity , transform:[{translateY: rightHeadertranslateY}]}]}>
                {rightHeading}</Animated.Text>
        </View>

      </>
    );
}

const styles = StyleSheet.create({
    container:{flexDirection:'row', justifyContent:'center', alignItems:'center'},
    header:{fontSize:25, fontWeight:'bold', color: '#1f1f80'}
});

export default FormHeader;