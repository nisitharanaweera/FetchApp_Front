import { StyleSheet, Text} from 'react-native';
import React, {useState } from 'react';
import { isValidElement, isValidObjectField, updateError } from '../utils/methods';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';

const LoginForm = () => {
const [userInfo,setUserInfo] = useState({
    email:'',
    password:''
})
const {error, setError} = useState('');
const {email, password} = userInfo;

const handleOnChangeText = (value, fieldName)=>{
    setUserInfo({...userInfo,[fieldName] :value }) 
}
const isValidForm =()=>{
    if(!isValidObjectField(userInfo)) return updateError('All fields Required',
        setError)
    if(!isValidEmail(email)) return updateError('Invalid Email',
    setError)
    if(!password.trim() || password.length<8) return updateError('Invalid Password',
    setError)
}



const submitForm=()=>{
    if(isValidForm()){

    }

}

  return (
    <FormContainer>
        {error ? (
            <Text style = {{color:'red', fontSize: 18, textAlign: 'center'}}>
                {error}
            </Text>
        ):null}

        <FormInput value={email} autoCapitalize ='none'
        onChangeText={(value) =>handleOnChangeText(value,'email')} label='Email ' placeholder='abc@email.com'/>
        <FormInput value = {password} autoCapitalize ='none' secureTextEntry
        onChangeText={(value) =>handleOnChangeText(value,'password')} label='Password ' placeholder='***********'/>
        <FormSubmitBtn onPress={submitForm} title='Login'/> 
    </FormContainer >
  )
}

export default LoginForm

const styles = StyleSheet.create({

})