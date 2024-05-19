"use client";
import React, { useState } from "react";
import { StyledCombobox } from "../styles/style-comboBox";

const Combobox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log("Opção selecionada:", value);
  };

  return (
    <StyledCombobox>
      <button onClick={toggleDropdown}>
        Filtrar por Herói: <span className={isOpen ? "open" : "closed"}>▼</span>
      </button>
      {isOpen && (
        <ul>
          <li onClick={() => handleSelectChange("acao")}>Capitão America</li>
          <li onClick={() => handleSelectChange("drama")}>Homem de Ferro</li>
          <li onClick={() => handleSelectChange("suspense")}>Hulk</li>
          {/* Adicione mais opções conforme necessário */}
        </ul>
      )}
    </StyledCombobox>
  );
};

export default Combobox;
