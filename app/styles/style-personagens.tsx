import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerPrincipal = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Carrosel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  width: 100%;
`;

export const Inner = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    border-radius: 30px;
    bottom: 0;
    left: 0;
    margin-bottom: 3px;
    width: 100%;
    height: 50%;
    background-color: rgba(255, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const Fotos = styled(motion.div)`
  display: flex;
  gap: 35px;
  overflow: hidden;
  margin: 0 auto;
  transition: transform 0.5s ease;
  max-width: fit-content;
`;
