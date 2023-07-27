import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitBtn from './FormSubmitBtn'

import { Formik } from 'formik'
import * as Yup from 'yup'

const SignupForm = () => {
  const userInfo ={
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
  };

  const validationSchema = Yup.object({
    name:Yup.string().trim().min(3, "Invalid Name").required("Name cannot be empty"),
    email:Yup.string().email("Invalid Email").required("Email cannot be empty"),
    password:Yup.string().trim().min(8,' Password should have at least 8 characters'),
    confirmPassword:Yup.string().equals([Yup.ref('password'), null],"The Passwords do not match")


  });

  const {name, email, password, confirmPassword}= userInfo;

  const handleOnChangeText =(value, fieldName) =>{
    setUserInfo({...userInfo,[fieldName]:value});
  };

  const submitForm=()=>{

  }
  return (
    <FormContainer>
        <Formik initialValues={userInfo} 
        validationSchema={validationSchema} 
        onSubmit={(values, formikActions)=>{
          setTimeout(()=>{
            console.log(values)
            formikActions.resetForm();
            formikActions.setSubmitting(false);
          },3000);

        }}>
          {({values,errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit})=>{
            const {name, email, password, confirmPassword}= values;
            console.log(values);
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