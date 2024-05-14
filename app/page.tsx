"use client";

import { useState } from "react";
import FirstScreen from "./_components/firstScreen";

export default function Home() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };
  return (
    <div>
      <FirstScreen onSignUpClick={handleSignUpClick} showForm={true} />
    </div>
  );
}
