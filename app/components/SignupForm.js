import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitBtn from './FormSubmitBtn'

const SignupForm = () => {
  return (
    <FormContainer>
        <FormInput title='Full Name' placeholder='Rand Ranaweera'/>
        <FormInput title='Email' placeholder='abc@email.com'/>
        <FormInput title='Password' placeholder='***********'/>
        <FormInput title='Confirm Password' placeholder='***********'/>
        <FormSubmitBtn title='Sign Up'/> 
    </FormContainer >
  )
}

export default SignupForm

const styles = StyleSheet.create({

})