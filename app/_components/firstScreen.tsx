// No componente FirstScreen

import React, { useEffect, useState } from "react";
import {
  Container,
  DuasCores,
  ImageContainer,
  Rectangle,
  RememberMeContainer,
  Form,
  SegundoForm,
} from "../styles/tela-inicial01";
import Image from "next/image";
import CadastroForm from "./cadastro";
import Link from "next/link";

const FirstScreen: React.FC<{
  onSignUpClick: () => void;
  showForm: boolean;
}> = ({ onSignUpClick }) => {
  const [showSplit, setShowSplit] = useState(false);
  const [showMoveUp, setShowMoveUp] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [username, setUsername] = useState(""); // Estado para armazenar o nome de usuário
  const [password, setPassword] = useState(""); // Estado para armazenar a senha do usuário
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
    setShowForm(false);
    setShowSignUpForm(true);
  };

  const handleBackToLoginClick = () => {
    setShowSignUpForm(false);
    setShowForm(true);
  };

  const handleSignUpSuccess = (success: boolean) => {
    setShowSuccessMessage(success);
    handleBackToLoginClick();
  };

  const handleCreateAccount = () => {
    // Coleta os dados do formulário (nome de usuário e senha)
    const userData = {
      username: username,
      password: password,
    };

    // Passa os dados do formulário como propriedades para o componente Cadastro
    return (
      <CadastroForm
        username={userData.username}
        password={userData.password}
        onSignInClick={handleBackToLoginClick}
        setShowSuccessMessage={setShowSuccessMessage}
        onSignUpSuccess={handleSignUpSuccess}
      />
    );
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
        <ImageContainer style={{ transition: "transform 1s ease-in-out" }}>
          <Image src="/capa.png" alt="Imagem" layout="fill" objectFit="cover" />
        </ImageContainer>
      )}

      {/* Renderize o segundo formulário se showSignUpForm for verdadeiro */}
      {showSignUpForm && (
        <Form
          showForm={showSignUpForm}
          key="signUpForm"
          style={{
            transform: `translateX(${showSignUpForm ? "0" : "100%"})`,
            opacity: showSignUpForm ? 1 : 0,
            transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
          }}
        >
          <SegundoForm>
            <h1>Criar conta</h1>
            <p>Preencha os campos abaixo:</p>
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Atualiza o estado do nome de usuário
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha do usuário
            />
            <button type="submit" onClick={handleCreateAccount}>
              Criar conta
            </button>

            <DuasCores>
              <p>
                Já tem uma conta?{" "}
                <span onClick={handleBackToLoginClick}>
                  Voltar para o login
                </span>
              </p>
            </DuasCores>
          </SegundoForm>
        </Form>
      )}

      {/* Renderize o primeiro formulário */}
      {showForm && (
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
                <p onClick={handleSignUpLinkClick}>Esqueci minha senha</p>
              </RememberMeContainer>
            </div>
            <Link href="/home">
              <button type="submit">Entrar</button>
            </Link>

            <DuasCores>
              <p>
                <a style={{ cursor: "pointer" }}>
                  Ainda não tem login?
                  <span onClick={handleSignUpLinkClick}> Cadastre-se</span>
                </a>
              </p>
            </DuasCores>
          </div>
        </Form>
      )}
    </Container>
  );
};

export default FirstScreen;
