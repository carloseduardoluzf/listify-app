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
    background-color: #6ed5b4;
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

export const ListContainer = styled.div`
  padding-right: 80px;
  padding-left: 80px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;

  a{
    text-decoration: none;
    text-decoration-color: black;
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    cursor: pointer;

    .sort-button {
      background: transparent;
      border: none;
    }

    span {
      margin-right: 8px;
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-top: 1px solid #d9bebe;
  cursor: pointer;

  .actions {
    display: flex;
    align-items: center;

    button {
      outline: none;
      border: none;
      background: transparent;
    }

    img {
      padding-right: 20px;
    }
  }

  .category {
    small {
      background: #6ed5b4;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: bold;
      padding: 4px;
      margin-left: 8px;
    }
  }

  .timestamp{
    display: flex;
    align-items: center;

    img{
      margin-right: 10px;
    }

  }

`;
