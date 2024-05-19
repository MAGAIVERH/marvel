import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const slideUpAndOut = keyframes`
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-230%);
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

const slideFromLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200%);
  }

  to {
    opacity: 1;
    transform: translateX(-50%);
  }
`;

const slideOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateX(-50%);
  }

  to {
    opacity: 0;
    transform: translateX(-200%);
  }
`;

const slideUpAnimation = keyframes`
  from {
    transform: translateY(400%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

export const Rectangle = styled.div`
  position: relative;
  width: 372px;
  height: 106px;
  background-color: rgb(255, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 64px;
  transition: transform 2s ease;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 80%;
    height: 80px;
    font-size: 48px;
    animation: ${slideInFromRight} 2s ease forwards,
      ${slideUpAndOut} 2s 2s ease forwards;
    margin-top: 50vh; /* Posiciona o retângulo na metade inferior da tela */
    margin-left: auto; /* Mantém o alinhamento central */
    margin-right: auto; /* Mantém o alinhamento central */
    margin-top: -80px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  animation: ${slideInAnimation} 2s ease forwards;

  @media (max-width: 768px) {
    display: none; /* Oculta completamente o ImageContainer na versão mobile */
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  }
`;

interface FormProps {
  showForm: boolean;
}

export const Form = styled.form<FormProps>`
  position: absolute;
  top: 35%;
  left: ${({ showForm }) => (showForm ? "24%" : "50%")};
  transform: translate(50%, -50%);
  padding: 20px;
  border-radius: 10px;
  animation: ${({ showForm }) =>
      showForm ? slideFromLeftAnimation : slideOutAnimation}
    5s forwards;

  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    margin-top: -20vh;

    h1 {
      text-align: center;
    }
  }

  h1 {
    color: #d32f2f;
    margin-bottom: 8px;
  }

  p {
    margin-left: 10px;
    color: #666;
    margin-bottom: 10px;
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

  input[type="checkbox"] {
    margin-right: 5px;
  }

  label {
    color: #666;
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

  .forgot-password a {
    color: #d32f2f;
    text-decoration: none;
    border-bottom: 1px solid #d32f2f;
  }

  .register a {
    color: #d32f2f;
    text-decoration: none;
  }
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 14px;

  p {
    margin-left: 70px;
    margin-top: 5px;
    color: #666;
    border-bottom: 1px solid red;
    cursor: pointer;
  }
`;

export const DuasCores = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #666;
    text-decoration: none;
  }

  span {
    color: #d32f2f;
  }
`;

export const SegundoForm = styled.div`
  width: 330px;

  h1 {
    text-align: center;
    color: #d32f2f;
    margin-bottom: 8px;
  }

  p {
    margin-left: 10px;
    color: #666;
    margin-bottom: 10px;
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
