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
} from './Login.Styles';
import plantImage from '../assets/images/chris-lee-70l1tDAI6rM-unsplash 1.png';
import { loginUser } from '../api/api';
import { Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async() => {
    try{
      const data = await loginUser(email, password);
      console.log('Login Sucessuful', data);
      console.log(data.token)
      localStorage.setItem('Token', data.token);

      navigate('/dashboard');
    } catch{
      setError('Login Failed.');
    };
  }
  return (
    <Container>
      <FormContainer>
        <Title>Welcome back!</Title>
        <p>Enter your credentials to access your account</p>
        <Form>
          <label>Email address</label>
          <Input type="email" placeholder="Enter your email" value={email}
          onChange={e=> setEmail(e.target.value)} />
          <label>Password</label>
          <Input type="password" placeholder="Enter your password" value={password} 
          onChange={e=> setPassword(e.target.value)}/>
          <Link href="#">Forgot password?</Link>
          <Button onClick={handleLogin}>Login</Button>
          <p>or</p>
          <SocialButtons>
            <SocialButton bgColor="#4285F4">Sign in with Google</SocialButton>
            <SocialButton bgColor="#000">Sign in with Apple</SocialButton>
          </SocialButtons>
        </Form>
        <Link href="#">Don’t have an account? Sign Up</Link>
      </FormContainer>
      <ImageContainer>
        <img src={plantImage} alt="Plant" />
      </ImageContainer>
    </Container>
  );
};

export default Login;
