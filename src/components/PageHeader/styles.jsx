import styled from "styled-components";

export const Container = styled.header`
  margin-top: 50px;
  margin-bottom: 24px;
  margin-right: 460px;
  

  a {
    margin-bottom:10px;
    display: flex;
    align-items: center;
    text-decoration: none;
    span {
      color: black;
      font-weight: bold;
    }

    img {
      margin-right: 10px;
      margin-left: 4px;
      transform: rotate(-90deg);
    }

    h1{
      font-size: 24px;
    }
  }
`;
