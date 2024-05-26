"use client";

import { useState } from "react";
import TelaInicial from "./_components/telaInicial";

export default function Home() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  return (
    <div>
      <TelaInicial onSignUpClick={handleSignUpClick} showForm={true} />
    </div>
  );
}
