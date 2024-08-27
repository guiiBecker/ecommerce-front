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
import { useNavigate } from 'react-router-dom';





const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSignUp = async(event) => {
    event.preventDefault();
    
    try {
      const data = await signupUser(name, email, password);
      console.log('Signup Successful, data received:', data);
      
      
      if (data.access_token) {
        
        localStorage.setItem('Token', data.access_token);
        console.log('Token saved:', data.access_token);
        
        
        navigate('/dashboard');
        console.log('Navigating to /dashboard');
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Signup failed. Please check your details and try again.');
    };
  }
  return (
    <Container>
      <FormContainer>
        <Title>Get Started Now</Title>
        <p>Enter your credentials to access your account</p>
        <Form onSubmit={handleSignUp}>
          <label>Name</label>
          <Input type="text" placeholder="Enter your name" value={name}
            onChange={e => setName(e.target.value)} />
          <label>Email address</label>
          <Input type="email" placeholder="Enter your email" value={email}
            onChange={e=> setEmail(e.target.value)} />
          <label>Password</label>
          <Input type="password" placeholder="Enter your password" value={password}
              onChange={e=> setPassword(e.target.value)} />
          <Checkbox>
            <input type="checkbox" /> I agree to the <a href="#">terms & policy</a>
          </Checkbox>
          <Button type='submit'>Signup</Button>
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
