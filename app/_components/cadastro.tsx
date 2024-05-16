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
  // armazenar no localStorage
  const userData = {
    username: username,
    password: password,
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  setShowSuccessMessage(true);

  setTimeout(() => {
    setShowSuccessMessage(false);

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
    handleCreateAccount(
      username,
      password,
      onSignInClick,
      setShowSuccessMessage
    );
  }, [username, password, onSignInClick, setShowSuccessMessage]);

  const handleSignUpSuccess = () => {
    onSignUpSuccess(true);
  };

  return null;
};

export default CadastroForm;
