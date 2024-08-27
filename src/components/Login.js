import React from 'react';
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

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Welcome back!</Title>
        <p>Enter your credentials to access your account</p>
        <Form>
          <label>Email address</label>
          <Input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <Input type="password" placeholder="Enter your password" />
          <Link href="#">Forgot password?</Link>
          <Checkbox>
            <input type="checkbox" /> Remember for 30 days
          </Checkbox>
          <Button>Login</Button>
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
