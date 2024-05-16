import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled.div`
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

export const DetailsLink = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  display: block;
  margin-top: 0px;
`;

export const ArrowButton = styled(motion.div)`
  border: none;
  outline: none;
  z-index: 1;
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
