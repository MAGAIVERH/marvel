import React from "react";
// import Header from "../_components/header";
import Filmes from "../_components/filmes";
import Combobox from "../_components/comboBox";

const FilmesPage = () => {
  return (
    <div>
      {/* <Header /> */}

      <Combobox />
      <Filmes />
    </div>
  );
};

export default FilmesPage;
