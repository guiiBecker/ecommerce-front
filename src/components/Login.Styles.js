import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const FormContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const Link = styled.a`
  margin-top: 20px;
  text-align: right;
  color: #007BFF;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;

  a {
    color: #007BFF;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SocialButton = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  background-color: ${props => props.bgColor};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;
