import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #c3c3c3;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    overflow-y: scroll;
  }
`;
export const Form = styled.form`
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px;
  background-color: #778899;
  position: sticky;
  top: 10;
  margin: 10px 0;

  button {
    background-color: green;
    color: #39d538;
    border: none;
    padding: 3px;
    border-radius: 4px;
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
  background-color: #778899;
  margin: 2px 0;

  button {
    background-color: red;
    color: #800000;
    border: none;
    padding: 3px;
    border-radius: 4px;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  p {
    font-size: 10px;
    font-weight: bold;
  }

  span {
    font-size: 10px;
    font-weight: normal;
  }
`;

export const H1 = styled.h1`
  color: black;
  font-size: 20px;
`;
