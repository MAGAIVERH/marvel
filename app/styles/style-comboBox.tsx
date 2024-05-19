import styled from "styled-components";

export const StyledCombobox = styled.div`
  border: 2px solid red;
  position: absolute; /* Absoluto em relação ao contêiner pai */
  top: 190px; /* Ajuste conforme necessário */
  left: 250px; /* Ajuste conforme necessário */
  width: 180px;
  border-radius: 5px;
  background-color: black;
  z-index: 1000;

  button {
    padding: 10px; /* Ajuste o padding conforme necessário */
    width: 100%;
    color: red;
    background-color: black;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;

    span {
      margin-left: 10px; /* Ajuste conforme necessário */
      transition: transform 0.3s ease;
    }

    .open {
      transform: rotate(180deg);
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    color: red;
    border-top: none;
    background-color: black;
    width: 100%;
    box-shadow: none;
    font-size: 16px;

    li {
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }

  @media (max-width: 768px) {
    top: 100px;
    left: 10px;
  }
`;
