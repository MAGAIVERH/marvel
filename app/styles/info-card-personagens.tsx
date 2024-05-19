import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  display: flex;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  text-align: center;
  padding: 10px;
  width: calc(100% - 20px);
  z-index: 2;
`;

export const Name = styled.h3`
  margin-bottom: 35px;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  text-align: center;
`;

export const Title = styled.p`
  margin-bottom: 35px;
  text-align: center;
  font-size: 24px;
`;

export const Text2 = styled.p`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 30px;
  font-size: 14px;
  text-align: center;
`;

export const Nota = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: 20px;
`;

export const NomeFilme = styled.p`
  margin-bottom: 35px;
  text-align: center;
  font-size: 24px;
`;

export const Sinopse = styled.p`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 30px;
  font-size: 14px;
  text-align: center;
`;

export const Informacao = styled.p`
  font-size: 14px;
`;

export const Imagem = styled.div`
  display: flex;
  padding-top: 10px;
  height: 60px;
  margin-bottom: 20px;
  gap: 10px;
`;

export const Avaliacao = styled.p`
  padding-bottom: 30px;
  text-align: center;
  font-size: 20px;
`;

export const DetailsLink = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  display: block;
  margin-top: 0px;
  cursor: pointer;
`;

export const ArrowButton = styled(motion.div)<{ isVisible: boolean }>`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ArrowIcon = styled.div`
  color: red;
  font-size: 30px;
`;

export const LeftArrow = styled(ArrowIcon)`
  cursor: pointer;
`;

export const RightArrow = styled(ArrowIcon)`
  cursor: pointer;
`;

export const SideOverlay = styled.div<{ isLast: boolean }>`
  position: absolute;
  top: 0;
  left: 100%;
  ${({ isLast }) => (isLast ? `right: 100%; left: auto;` : "")}
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  @media (max-width: 768px) {
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const DetailsOverlay = styled.div`
  width: 300px;
  height: 439px;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  display: flex;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  border: 2px solid white;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
`;

export const CloseIcon = styled.span`
  color: white;
  line-height: 0;
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;
