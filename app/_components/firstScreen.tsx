"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  DuasCores,
  ImageContainer,
  Rectangle,
  RememberMeContainer,
} from "../styles/tela-inicial01";
import Image from "next/image";
import { Form } from "../styles/tela-inicial01";
import SignUpForm from "./cadastro";

interface FirstScreenProps {
  onSignUpClick: () => void;
  showForm: boolean; // Adicione a propriedade showForm
}

const FirstScreen: React.FC<FirstScreenProps> = ({ onSignUpClick }) => {
  const [showSplit, setShowSplit] = useState(false);
  const [showMoveUp, setShowMoveUp] = useState(false);
  const [showForm, setShowForm] = useState(false); // Adicionando estado para controlar a exibição do formulário
  const [showSignUpForm, setShowSignUpForm] = useState(false); // Estado para controlar a visibilidade do segundo formulário

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplit(true);
      setTimeout(() => {
        setShowMoveUp(true);
        setShowForm(true);
      }, 2000);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleSignUpLinkClick = () => {
    // Quando o link "Cadastre-se" for clicado, esconde o formulário de login e mostra o formulário de cadastro
    setShowForm(false);
    setShowSignUpForm(true);
  };

  return (
    <Container>
      <Rectangle
        style={{
          transform: `translateX(${showSplit ? "-100%" : "0"}) translateY(${
            showMoveUp ? "-200%" : "0"
          })`,
          transition: "transform 2s ease-in-out",
        }}
      >
        MARVEL
      </Rectangle>
      {showSplit && (
        <ImageContainer style={{ transition: "transform 2s ease-in-out" }}>
          <Image src="/capa.png" alt="Imagem" layout="fill" objectFit="cover" />
        </ImageContainer>
      )}

      {/* Renderize o segundo formulário se showSignUpForm for verdadeiro */}
      {showSignUpForm && (
        <SignUpForm
          onSignInClick={onSignUpClick}
          showForm={false}
          key="signUpForm"
        />
      )}
      {/* Renderize o primeiro formulário */}

      <Form
        showForm={showForm}
        key="form"
        style={{
          transform: `translateX(${showForm ? "0" : "100%"})`,
          opacity: showForm ? 1 : 0,
          transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
        }}
      >
        <div>
          <h1>Bem-vindo de volta!</h1>
          <p>Acesse sua conta:</p>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <div style={{ marginTop: "10px" }}>
            <RememberMeContainer>
              <input
                type="checkbox"
                id="rememberMe"
                style={{ marginRight: "5px" }}
              />

              <label htmlFor="rememberMe">Lembrar-me</label>
              <p>Esqueci minha senha</p>
            </RememberMeContainer>
          </div>
          <button type="submit">Entrar</button>
          <DuasCores>
            <p>
              <a onClick={onSignUpClick} style={{ cursor: "pointer" }}>
                Ainda não tem login?
                <span onClick={onSignUpClick}>Cadastre-se</span>
              </a>
            </p>
          </DuasCores>
        </div>
      </Form>
    </Container>
  );
};

export default FirstScreen;
