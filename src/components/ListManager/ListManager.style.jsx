import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 700px;
  border-radius: 20px;
  margin-top: 32px;
  position: relative;
  background-color: aliceblue;

  @media (max-width: 768px) {
    padding: 0 10px;
    width: 400px;
    height: 600px;
    border-radius: 20px;
    margin-top: 32px;
    margin: 71px auto;
    position: relative;
    background-color: aliceblue;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
  padding-right: 80px;
  padding-left: 80px;

  @media (max-width: 768px) {
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  @media (max-width: 768px) {
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
`;

export const InputSearchContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    outline: none !important;
    width: 317px;
    height: 40px;
    margin-right: 48px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border: none;
    background-color: #d9bebe;
    padding: 0 16px;
    color: #000000;
    font-weight: 600;

    &::placeholder {
      font-family: "Inter", sans-serif;
      font-weight: 600;
      color: #000000;
    }
  }

  img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    input {
      width: 100%;
      margin-right: 20px;
    }
  }
`;
