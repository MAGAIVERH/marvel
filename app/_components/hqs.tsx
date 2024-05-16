"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ContainerPrincipal,
  Carrosel,
  Fotos,
  Inner,
} from "../styles/style-personagens";
import {
  CardContainer,
  TextContainer,
  DetailsLink,
  Text,
  Name,
  ArrowButton,
  RightArrow,
  LeftArrow,
} from "../styles/info-card-personagens";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Importando as imagens
import capitaoMarvel from "/public/image-personagens/capita-marvel.png";
import capitaoAmerica from "/public/image-personagens/capitao-america.png";
import homemFerro from "/public/image-personagens/homem-ferro.png";
import hulk from "/public/image-personagens/hulk.png";
import spider from "/public/image-personagens/spider.png";
import thor from "/public/image-personagens/thor.png";
import tranos from "/public/image-personagens/tranos.png";
import wanda from "/public/image-personagens/wanda.png";
import { cardsData } from "../cards.data";

const images = [
  capitaoMarvel,
  capitaoAmerica,
  homemFerro,
  hulk,
  wanda,
  tranos,
  thor,
  spider,
];

const Hqs = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setScrollIndex((prevIndex) => Math.max(0, prevIndex - 1));
    } else if (direction === "right") {
      setScrollIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 3));
    }
  };

  return (
    <ContainerPrincipal>
      <ArrowButton>
        {scrollIndex > 0 && (
          <motion.div onClick={() => handleScroll("left")}>
            <LeftArrow>
              <FaArrowLeft />
            </LeftArrow>
          </motion.div>
        )}
      </ArrowButton>
      <Carrosel>
        <Fotos>
          {images.slice(scrollIndex, scrollIndex + 3).map((image, index) => (
            <Inner key={index}>
              <motion.div>
                <Image src={image} alt="Fotos dos Personagens" />
                <CardContainer>
                  <TextContainer>
                    <Name>{cardsData[index].nome}</Name>
                    <Text>{cardsData[index].text}</Text>
                    <DetailsLink href={`/details/${cardsData[index].nome}`}>
                      Ver detalhes
                    </DetailsLink>
                  </TextContainer>
                </CardContainer>
              </motion.div>
            </Inner>
          ))}
        </Fotos>
      </Carrosel>

      <ArrowButton>
        {scrollIndex < images.length - 3 && (
          <motion.div onClick={() => handleScroll("right")}>
            <RightArrow>
              <FaArrowRight />
            </RightArrow>
          </motion.div>
        )}
      </ArrowButton>
    </ContainerPrincipal>
  );
};

export default Hqs;
