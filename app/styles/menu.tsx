import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  color: white;
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 2px solid red;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 88%;
  overflow: hidden;
  position: absolute;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 250%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  }
`;

export const Logo = styled.div`
  margin-bottom: 20px;
  margin-left: 25px;
  color: white;
  background-color: red;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 140px;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const MenuItems = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-left: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 72px;
    right: 153px;

    width: 60%;
    background-color: rgba(0, 0, 0, 0.9);
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-200%)"};
    z-index: 1001;
  }
`;

export const MenuItem = styled.li`
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 100px;
  margin-right: 70px;
  color: #666;

  &:hover,
  &.active {
    color: #fff;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const UserCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  margin-top: -10px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  span {
    color: black;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-left: -5px;
  }
`;

export const Logout = styled.a`
  color: #666;
  text-decoration: none;
  cursor: pointer;
  margin-right: 70px;
  margin-left: -50px;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-right: 2px;
  }
`;

export const SandwichIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 768px) {
    margin-left: 20px;
    display: block;
  }
`;
