// menu.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ImageContainer,
  Logo,
  Logout,
  MenuItem,
  MenuItems,
  MenuWrapper,
  SandwichIcon,
  UserCircle,
} from "../styles/menu";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

interface MenuProps {
  pathname: string; // Definindo explicitamente o tipo de pathname como string
}

const Menu = ({ pathname }: MenuProps) => {
  const [userData, setUserData] = useState<{ username: string }>({
    username: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUserData(userData);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuWrapper>
        <SandwichIcon onClick={toggleMenu}>
          <FaBars />
        </SandwichIcon>
        <Logo>MARVEL</Logo>
        <MenuItems isOpen={isOpen}>
          <Link href="/personagens" passHref>
            <MenuItem className={pathname === "/personagens" ? "active" : ""}>
              Personagens
            </MenuItem>
          </Link>

          <Link href="/filmes" passHref>
            <MenuItem className={pathname === "/filmes" ? "active" : ""}>
              Filmes
            </MenuItem>
          </Link>

          <Link href="/hqs" passHref>
            <MenuItem className={pathname === "/hqs" ? "active" : ""}>
              Hqs
            </MenuItem>
          </Link>
        </MenuItems>
        <UserCircle>
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
