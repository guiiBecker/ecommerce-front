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
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (event) => {
    event.preventDefault();  
  
    console.log('handleLogin called'); 
  
    try {
  
      const data = await loginUser(email, password);
      console.log('Login Successful, data received:', data);
  
      if (data.access_token) {
    
        localStorage.setItem('Token', data.access_token);
        console.log('Token saved:', data.access_token);
  
     
        navigate('/dashboard');
        console.log('Navigation to /dashboard');
      } else {
   
        setError('Login failed. Invalid credentials or missing token.');
        console.error('Login failed. No token found in the response.');
      }
    } catch (error) {
 
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Welcome back!</Title>
        <p>Enter your credentials to access your account</p>
        <Form onSubmit={handleLogin}> 
          <label>Email address</label>
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
          <label>Password</label>
          <Input 
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
          <Link href="#">Forgot password?</Link>
          {error && <p>{error}</p>}
          <Button type="submit">Login</Button>
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
