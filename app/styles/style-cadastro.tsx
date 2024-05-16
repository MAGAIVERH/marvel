import styled from "styled-components";
import { keyframes } from "styled-components";

export const slideFromLeftAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

interface SignUpFormContainerProps {
  showForm: boolean;
}

export const SignUpFormContainer = styled.form<SignUpFormContainerProps>`
  position: absolute;
  top: 35%;
  left: ${({ showForm }) => (showForm ? "24%" : "-100%")};
  transform: translate(50%, -50%);
  padding: 20px;
  border-radius: 10px;
  animation: ${slideFromLeftAnimation} 0.5s forwards;
`;

export const SignUpFormContent = styled.div`
  h1 {
    color: #d32f2f;
    margin-bottom: 8px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    border-radius: 25px;
    color: black;
    background-color: white;
  }

  button {
    width: 100%;
    height: 50px;
    background-color: #d32f2f;
    color: #fff;
    border: none;
    font-size: 22px;
    padding: 10px 20px;
    margin-top: 10px;
    margin-bottom: 15px;
    border-radius: 25px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  border-radius: 25px;
  color: black;
  background-color: white;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  font-size: 22px;
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 25px;
  cursor: pointer;
`;
