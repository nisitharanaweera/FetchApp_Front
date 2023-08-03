import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import client from '../api/client';


const ImageUpload = () => {
  const [profileImage, setProfileImage] = useState('');
  const [progress, setProgress] = useState(0);


  const openImageLibrary = async() =>{
    const {status} = await ImagePicker.
    requestMediaLibraryPermissionsAsync();
    if (status !== 'granted'){
        alert('Sorry, we need camera roll permission to make this work')
    }
    if (status === 'granted'){
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
      });
      if (!response.canceled){
        setProfileImage(response.uri)

      }
    }
  };
  const uploadProfileImage = async() =>{
      const formData = new FormData();
      formData.append('profile',{
        name: new Date() + "_profile",
        uri: profileImage,
        type:'image/jpg'
      })

      try {
        const res = await client.post('/upload-profile',formData,{
          headers:{
            Accept:'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGNhZGY2Mzk0YmIwNjVlZmQ5ZjUzYmIiLCJpYXQiOjE2OTEwNjk2OTQsImV4cCI6MTY5MTE1NjA5NH0.5_pP5_VGU53czFkDQyOiWdQ0lz-C-KebFbOq1O2uGmI',
          },
          // onUploadProgress:({loaded,total}) => console.log(loaded/total)
        });
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
        
      }
      
  };
  
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={openImageLibrary} style={styles.uploadBtn}>
            
            
            {profileImage ? <Image source={{uri:profileImage}} style={{width:'100%',height:'100%'}}
            /> : <Text style={styles.uploadBtnTxt}>Upload Image</Text>}



        </TouchableOpacity>
      
        <Text style={styles.skipTxt}>Skip this step?</Text>
        
        {profileImage ? <Text onPress={uploadProfileImage}
          style={styles.uploaGBtn}>Upload</Text>
          : null}
      </View>
    </View>
  )
}

export default ImageUpload

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
},
uploaGBtn:{
  backgroundColor :'#30a80bec',
  textAlign:'center',
    padding:10,
    fontSize:15,
    fontWeight:'bold',
    letterSpacing:1,
    opacity:0.6,
    color:'#fffffF',
    borderRadius:30
},
uploadBtnTxt:{
  textAlign:'center',
  fontSize:16,
  opacity:0.4,
  fontWeight:'bold'
  
  },
  skipTxt:{
    textAlign:'center',
    padding:10,
    fontSize:15,
    fontWeight:'bold',
    letterSpacing:1,
    opacity:0.6

  },
uploadBtn:{
  height:125,
  width:125, 

  borderRadius:125/2,
  borderStyle:'dashed',
  borderWidth:1,
  justifyContent:'center',
  alignItems:'center',
  overflow:'hidden'
},
});