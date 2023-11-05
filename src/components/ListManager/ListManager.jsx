import React from "react";
import {
  Container,
  Header,
  Title,
  InputSearchContainer,
} from "../ListManager/ListManager.style";
import addIcon from "../../assets/icons/add-icon.svg";
export default function ListManager() {
  return (
    <Container>
      <Header>
        <Title>
          <h1>All lists</h1>
        </Title>
        <InputSearchContainer>
          <input type="text" placeholder="Procure sua lista..." />
          <img src={addIcon} alt="Ícone de adicionar lista" />
        </InputSearchContainer>
      </Header>
    </Container>
  );
}
