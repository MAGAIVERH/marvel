import React from "react";
import Carrosel from "../_components/carrosel";
import ImagePersonagens from "../_components/image-personagens";

const Personagens = () => {
  return (
    <div>
      <h1>Meu Carrossel de Imagens</h1>
      <Carrosel images={ImagePersonagens()} />
    </div>
  );
};

export default Personagens;
