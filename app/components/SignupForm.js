import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitBtn from './FormSubmitBtn'
import client from '../api/client'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackActions } from '@react-navigation/native'
import { useLogin } from '../context/LoginProvider'





const SignupForm = ({navigation}) => {
  const userInfo ={
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
  };

  const {setLoginPending} = useLogin();

  const validationSchema = Yup.object({
    name:Yup.string().trim().min(3, "Invalid Name").required("Required"),
    email:Yup.string().email("Invalid Email").required("Required"),
    password:Yup.string().trim().min(8,'8+ characters required.'),
    confirmPassword:Yup.string().equals([Yup.ref('password'), null],"Try again, doesn\'t match")


  });

  const {name, email, password, confirmPassword}= userInfo;

  const handleOnChangeText =(value, fieldName) =>{
    setUserInfo({...userInfo,[fieldName]:value});
  };

  const submitForm=()=>{

  }

const signUp = async (values, formikActions)=>{
  setLoginPending(true);
  const res = await client.post('/create-user',{
    ...values,
  });
  if(res.data.success){
    const signInRes = await client.post('/sign-in',
      {email:values.email, password: values.password});
    if(signInRes.data.success){
      navigation.dispatch(
            StackActions.replace('ImageUpload',{
              token: signInRes.data.token, 
            })
      );
    }  
    
  }



    console.log(res.data);
    formikActions.resetForm();
    formikActions.setSubmitting(false);
    setLoginPending(false);

};



  return (
    <FormContainer>
        <Formik initialValues={userInfo} 
        validationSchema={validationSchema} 
        onSubmit={signUp}>
          {({values,errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit})=>{
            const {name, email, password, confirmPassword}= values;
            // console.log(values);
            return(
            <>
            <FormInput value={name} error={touched.name && errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')} label='Full Name' placeholder='Rand Ranaweera'/>
            <FormInput value={email} 
              onChangeText={handleChange('email')} error={touched.email && errors.email}
              onBlur={handleBlur('email')} autoCapitalize='none' label='Email' placeholder='abc@email.com'/>
            <FormInput value={password} 
              onChangeText={handleChange('password')} error={touched.password && errors.password}
              onBlur={handleBlur('password')} autoCapitalize='none' secureTextEntry label='Password' placeholder='***********'/>
            <FormInput value={confirmPassword} 
              onChangeText={handleChange('confirmPassword')} error={touched.confirmPassword && errors.confirmPassword}
              onBlur={handleBlur('confirmPassword')} autoCapitalize='none' secureTextEntry label='Confirm Password' placeholder='***********'/>

            <FormSubmitBtn 
              onPress={handleSubmit}  
              submitting ={isSubmitting}
              title='Sign Up'/>
            </>
            );


          }}
        </Formik>
         
    </FormContainer >
  )
}

export default SignupForm

const styles = StyleSheet.create({

})