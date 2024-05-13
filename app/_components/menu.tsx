"use client";

import Image from "next/image";
import {
  ImageContainer,
  Logo,
  Logout,
  MenuItem,
  MenuItems,
  MenuWrapper,
  UserCircle,
} from "../styles/menu";

const Menu = () => {
  return (
    <>
      <MenuWrapper>
        <Logo>MARVEL</Logo>
        <MenuItems>
          <MenuItem>Personagens</MenuItem>
          <MenuItem>Filmes</MenuItem>
          <MenuItem>HQs</MenuItem>
        </MenuItems>
        <UserCircle />
        <Logout href="#">Sair</Logout>
      </MenuWrapper>

      <ImageContainer>
        <Image src="/capa.png" alt="Imagem" objectFit="cover" layout="fill" />
      </ImageContainer>
    </>
  );
};

export default Menu;
