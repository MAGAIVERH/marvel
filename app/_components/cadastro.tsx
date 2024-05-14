import React, { useState } from "react";
import {
  Button,
  Input,
  SignUpFormContainer,
  SignUpFormContent,
} from "../styles/style-cadastro";
import { Form } from "../styles/tela-inicial01";

interface SignUpFormProps {
  onSignInClick: () => void;
  showForm: boolean; // Adicione a propriedade showForm
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignInClick, showForm }) => {
  // Adicione showForm aos props
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCreateAccount = () => {
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
      setUsername("");
      setPassword("");
      setShowSuccessMessage(false);

      // Voltar para o formulário de login
      onSignInClick();
    }, 2000);
  };

  return (
    <SignUpFormContainer showForm={showForm}>
      {/* Use showForm aqui */}
      <SignUpFormContent>
        {showForm && ( // Mostra o formulário de cadastro se o estado for true
          <Form showForm={showSuccessMessage}>
            <h1>Crie Sua Conta!</h1>
            {showSuccessMessage ? (
              <p>Conta criada com sucesso!</p>
            ) : (
              <>
                <Input
                  type="text"
                  placeholder="Usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="button" onClick={handleCreateAccount}>
                  Criar
                </Button>
              </>
            )}
          </Form>
        )}
      </SignUpFormContent>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
