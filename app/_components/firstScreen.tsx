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

const FirstScreen = () => {
  const [showSplit, setShowSplit] = useState(false);
  const [showMoveUp, setShowMoveUp] = useState(false);
  const [showForm, setShowForm] = useState(false); // Adicionando estado para controlar a exibição do formulário

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplit(true);
      setTimeout(() => {
        setShowMoveUp(true);
        setShowForm(true); // Mostrar o formulário após o movimento do retângulo
      }, 2000); // pausa de 1 segundo antes do movimento para cima
    }, 200);

    return () => clearTimeout(timer);
  }, []);

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
      {showForm && (
        <Form showForm={showForm}>
          <div className="form-content">
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
                <a href="#">
                  Ainda não tem login? <span>Cadastre-se</span>
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
