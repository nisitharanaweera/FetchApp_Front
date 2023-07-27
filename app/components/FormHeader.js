import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';


const FormHeader = ({leftHeading, rightHeading, leftHeadertranslateX= 40,rightHeadertranslateY = -20,rightHeaderOpacity = 0}) => {
  return (
    <>
        <View style={styles.titlecontainer}><Text style ={styles.maintitle}>FetchApp</Text></View>
        <View style = {styles.container}>
          <Animated.Text style={[styles.header, 
                      { transform: [{translateX: leftHeadertranslateX}]}]}>
                {leftHeading}</Animated.Text>
          
          <Animated.Text style={[styles.header,
                      {opacity:rightHeaderOpacity , transform:[{translateX: rightHeadertranslateY}]}]}>
                {rightHeading}</Animated.Text>
        </View>

      </>
    );
}

const styles = StyleSheet.create({
    container:{flexDirection:'row', justifyContent:'center', alignItems:'center'},
    header:{fontSize:25, fontWeight:'bold', color: '#1f1f80'},
    maintitle:{fontSize:30, fontWeight:'bold', color: '#df7817'},
    titlecontainer:{
      height:55,
      justifyContent:'center',
     alignItems:'center',
     paddingBottom:20
    }
});

export default FormHeader;