import React from 'react';
import { Text, TextInput, FormControl, Button } from '../../styles'
import { Title, LoginWrapper, FormContainer } from './Login.style';

export default function Login(props) {
  return (
    <LoginWrapper>
      <Title h4>Sign in Simba to start blogging</Title>
      <FormContainer>
        <FormControl>
          <TextInput
            placeholder={'Email address'}
            keyboardType={'email-address'}
          />
        </FormControl>

        <FormControl>
          <TextInput
            placeholder={'Password'}
            secureTextEntry
          />
        </FormControl>
      </FormContainer>

      <Button info title={'Login'}/>
      {/* Please remember that Button from react-native is a NATIVE button. It will look different on iOS and Android. And, you can't style it. To have custom style for buttons, we will have to create them ourselves.*/}
    </LoginWrapper>
  );
}