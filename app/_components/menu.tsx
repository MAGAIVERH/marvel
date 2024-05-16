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
import Link from "next/link";
import { useEffect, useState } from "react";

const Menu = () => {
  const [userData, setUserData] = useState<{ username: string }>({
    username: "",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUserData(userData);
    }
  }, []);
  return (
    <>
      <MenuWrapper>
        <Logo>MARVEL</Logo>
        <MenuItems>
          <Link href="/personagens">
            <MenuItem>Personagens</MenuItem>
          </Link>

          <Link href="/filmes">
            <MenuItem>Filmes</MenuItem>
          </Link>

          <Link href="/hqs">
            <MenuItem>HQs</MenuItem>
          </Link>
        </MenuItems>
        <UserCircle>
          {/* Renderiza a primeira letra do nome do usuário dentro do círculo */}
          {userData?.username && (
            <span>{userData.username.charAt(0).toUpperCase()}</span>
          )}
        </UserCircle>
        <Logout href="/">Sair</Logout>
      </MenuWrapper>

      <ImageContainer>
        <Image src="/capa.png" alt="Imagem" objectFit="cover" layout="fill" />
      </ImageContainer>
    </>
  );
};

export default Menu;
