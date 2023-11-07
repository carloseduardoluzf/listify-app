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



export const ItemContainer = styled.div`
  padding-right: 80px;
  padding-left: 80px;
  margin-top: 20px;
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

export const ItemHeader = styled.ul`
  display: flex;
  align-items: center;
  padding: 6px;
  border-bottom: 1px solid #d9bebe;
  cursor: pointer;

  li {
    display: flex;
    padding: 6px 34px;
    align-items: center;
  }

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

export const Item = styled.ul`
  display: flex;
  align-items: center;
  padding: 6px;
 
  cursor: pointer;

  li {
    display: flex;
    padding: 6px 34px;
    align-items: center;
  }

  .actions {

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

export const AddItem = styled.div`
  display: flex;
  justify-content: flex-end;

  img{
     cursor: pointer;
  }
 
  `;