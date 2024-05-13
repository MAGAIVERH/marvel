import styled from "styled-components";
export const MenuWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
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
`;

export const ImageContainer = styled.div`
  width: 100%; /* Ajuste a largura conforme necessário */
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
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-left: 200px;
`;

export const MenuItem = styled.li`
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 100px;
  margin-right: 70px;
  color: #666;

  &:hover {
    color: white;
  }
`;

export const UserCircle = styled.div`
  margin-left: 70px;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  margin-top: -10px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;

export const Logout = styled.a`
  bottom: 20px;
  left: 80px;
  color: #666;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
