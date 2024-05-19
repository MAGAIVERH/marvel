"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ContainerPrincipal,
  Carrosel,
  Fotos,
  InnerWithoutOverlay,
} from "../styles/style-personagens";
import {
  CardContainer,
  TextContainer,
  DetailsLink,
  Text,
  Name,
  CloseButton,
  DetailsOverlay,
  SideOverlay,
  ArrowButton,
  CloseIcon,
  LeftArrow,
  RightArrow,
  Title,
  Nota,
  Text2,
  NomeFilme,
  Sinopse,
  Informacao,
  Imagem,
  Avaliacao,
  CardsWrapper,
} from "../styles/info-card-personagens";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cardsData } from "../cards.data";

import capitaoMarvel from "/public/image-personagens/capita-marvel.png";
import capitaoAmerica from "/public/image-personagens/capitao-america.png";
import homemFerro from "/public/image-personagens/homem-ferro.png";
import hulk from "/public/image-personagens/hulk.png";
import spider from "/public/image-personagens/spider.png";
import thor from "/public/image-personagens/thor.png";
import tranos from "/public/image-personagens/tranos.png";
import wanda from "/public/image-personagens/wanda.png";
import RatingStars from "../_components/ratingStars";

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

const InfoFilmes = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setScrollIndex((prevIndex) => Math.max(0, prevIndex - 1));
    } else if (direction === "right") {
      setScrollIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 3));
    }
  };

  const handleDetailsClick = (index: number) => {
    setSelectedIndex(index);
    setDetailsVisible(true);
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setDetailsVisible(false);
  };

  const lastIndex = scrollIndex + 2;

  return (
    <CardsWrapper>
      <ContainerPrincipal>
        <ArrowButton isVisible={scrollIndex > 0}>
          {scrollIndex > 0 && (
            <LeftArrow as={motion.div} onClick={() => handleScroll("left")}>
              <FaArrowLeft />
            </LeftArrow>
          )}
        </ArrowButton>
        <Carrosel>
          <Fotos>
            {images.slice(scrollIndex, scrollIndex + 3).map((image, index) => {
              const isSelected =
                detailsVisible && selectedIndex === scrollIndex + index;
              const isLast = scrollIndex + index === lastIndex;

              return (
                <InnerWithoutOverlay key={index}>
                  <motion.div>
                    <Image src={image} alt="Fotos dos Personagens" />
                    <CardContainer>
                      {!isSelected && (
                        <TextContainer>
                          <Name>{cardsData[scrollIndex + index].nome}</Name>
                          <Text>{cardsData[scrollIndex + index].text}</Text>
                          <DetailsLink
                            onClick={() =>
                              handleDetailsClick(scrollIndex + index)
                            }
                          >
                            Ver detalhes
                          </DetailsLink>
                        </TextContainer>
                      )}
                    </CardContainer>
                  </motion.div>
                  {!isSelected && <div className="overlay"></div>}
                  {isSelected && (
                    <SideOverlay isLast={isLast}>
                      <DetailsOverlay>
                        <NomeFilme>
                          {cardsData[scrollIndex + index].nomefilme}
                        </NomeFilme>
                        <Sinopse>
                          {cardsData[scrollIndex + index].sinopse}
                        </Sinopse>
                        <Informacao>
                          {cardsData[scrollIndex + index].informacao}
                        </Informacao>
                        <Imagem>
                          <div
                            style={{ borderRadius: "10px", overflow: "hidden" }}
                          >
                            <Image
                              src="/sky.png"
                              alt="Capa do Filme 1"
                              width={50}
                              height={50}
                            />
                          </div>
                          <div
                            style={{ borderRadius: "10px", overflow: "hidden" }}
                          >
                            <Image
                              src="/amazon.jpeg"
                              alt="Capa do Filme 1"
                              width={50}
                              height={50}
                            />
                          </div>
                        </Imagem>
                        <Avaliacao>
                          {cardsData[scrollIndex + index].avaliacao}
                        </Avaliacao>
                        <RatingStars
                          rating={cardsData[scrollIndex + index].rating}
                        />{" "}
                        {/* Adicione as estrelas de avaliação aqui */}
                        <CloseButton onClick={handleClose}>
                          <CloseIcon>X</CloseIcon>
                        </CloseButton>
                      </DetailsOverlay>
                    </SideOverlay>
                  )}
                </InnerWithoutOverlay>
              );
            })}
          </Fotos>
        </Carrosel>
        <ArrowButton isVisible={scrollIndex < images.length - 3}>
          {scrollIndex < images.length - 3 && (
            <RightArrow as={motion.div} onClick={() => handleScroll("right")}>
              <FaArrowRight />
            </RightArrow>
          )}
        </ArrowButton>
      </ContainerPrincipal>
    </CardsWrapper>
  );
};

export default InfoFilmes;
