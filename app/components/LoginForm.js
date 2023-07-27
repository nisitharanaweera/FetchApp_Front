import { StyleSheet} from 'react-native'
import React from 'react'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitBtn from './FormSubmitBtn'

const LoginForm = () => {
  return (
    <FormContainer>
        <FormInput title='Email' placeholder='abc@email.com'/>
        <FormInput title='Password' placeholder='***********'/>
        <FormSubmitBtn title='Login'/> 
    </FormContainer >
  )
}

export default LoginForm

const styles = StyleSheet.create({

})