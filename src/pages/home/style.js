import styled from "styled-components";

export const Main = styled.main`
  background: rgb(49, 156, 253);
  background: linear-gradient(
    140deg,
    rgba(49, 156, 253, 1) 0%,
    rgba(9, 39, 121, 0.8268557422969187) 50%,
    rgba(86, 69, 180, 1) 100%
  );
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form-itens {
    overflow-y: scroll;
  }
`;
export const Form = styled.form`
  width: 250px;
  background: #21397b;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  border: 1px solid;
  border-radius: 10px;
  padding: 15px;
  position: sticky;
  top: 10;
  margin: 10px 0;

  h1 {
    color: white;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    border: 0.1px solid white;
    background-color: #0136bf;
  }

  button {
    margin-top: 5px;
    width: 180px;
    background-color: #0136bf;
    color: #fff;
    border: none;
    padding: 3px;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
export const Section = styled.section`
  width: 250px;
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px;
  justify-content: space-around;
  background-color: #21397b;
  margin: 2px 0;

  button {
    background-color: #0136bf;
    border: none;
    padding: 3px;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  p {
    font-size: 10px;
    font-weight: bold;
    color: white;
  }

  span {
    font-size: 10px;
    font-weight: normal;
    color: white;
  }
`;

export const H1 = styled.h1`
  color: black;
  font-size: 20px;
`;
