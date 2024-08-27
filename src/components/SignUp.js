import React, { useState } from 'react';
import {
  Container,
  FormContainer,
  ImageContainer,
  Form,
  Title,
  Input,
  Button,
  Link,
  Checkbox,
  SocialButtons,
  SocialButton
} from './SignUp.styles';
import plantImage from '../assets/images/chris-lee-70l1tDAI6rM-unsplash 1.png';
import { signupUser } from '../api/api';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async() => {
    try{
      const data = await signupUser(name, email, password);
      console.log('Sign Up', data);

      localStorage.setItem('token', data.token);

    }catch(error){
      setError('SignUpFailed')
    };
  }
  return (
    <Container>
      <FormContainer>
        <Title>Get Started Now</Title>
        <p>Enter your credentials to access your account</p>
        <Form>
          <label>Name</label>
          <Input type="text" placeholder="Enter your name" />
          <label>Email address</label>
          <Input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <Input type="password" placeholder="Enter your password" />
          <Checkbox>
            <input type="checkbox" /> I agree to the <a href="#">terms & policy</a>
          </Checkbox>
          <Button>Signup</Button>
          <p>or</p>
          <SocialButtons>
            <SocialButton bgColor="#4285F4">Sign in with Google</SocialButton>
            <SocialButton bgColor="#000">Sign in with Apple</SocialButton>
          </SocialButtons>
        </Form>
        <Link to="/">Have an account? Sign In</Link>
      </FormContainer>
      <ImageContainer>
        <img src={plantImage} alt="Plant" />
      </ImageContainer>
    </Container>
  );
};

export default SignUp;
