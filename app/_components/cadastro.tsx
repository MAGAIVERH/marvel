import React, { useEffect } from "react";

interface CadastroProps {
  username: string;
  password: string;
  onSignInClick: () => void;
  setShowSuccessMessage: (value: boolean) => void;
  onSignUpSuccess: (success: boolean) => void;
}

const handleCreateAccount = (
  username: string,
  password: string,
  onSignInClick: () => void,
  setShowSuccessMessage: (value: boolean) => void
) => {
  // Lógica para criar a conta do usuário e armazenar no localStorage
  const userData = {
    username: username,
    password: password,
  };

  // Armazenar os dados do usuário no localStorage
  localStorage.setItem("userData", JSON.stringify(userData));

  // Exibir mensagem de sucesso
  setShowSuccessMessage(true);

  // Simular o retorno ao formulário de login após 2 segundos
  setTimeout(() => {
    // Limpar os campos do formulário e ocultar a mensagem de sucesso
    // setUsername("");
    // setPassword("");
    setShowSuccessMessage(false);

    // Voltar para o formulário de login
    onSignInClick();
  }, 2000);
};

const CadastroForm: React.FC<CadastroProps> = ({
  username,
  password,
  onSignInClick,
  setShowSuccessMessage,
  onSignUpSuccess,
}) => {
  useEffect(() => {
    // Chama a função handleCreateAccount quando os dados do formulário forem recebidos
    handleCreateAccount(
      username,
      password,
      onSignInClick,
      setShowSuccessMessage
    );
  }, [username, password, onSignInClick, setShowSuccessMessage]); // Dependências do useEffect

  const handleSignUpSuccess = () => {
    onSignUpSuccess(true);
  };

  return null; // Ou retorne algum componente se necessário
};

export default CadastroForm;
