import React from "react";
import {
  Container,
  Header,
  Title,
  InputSearchContainer,
  ListContainer,
  List,
} from "../ListManager/ListManager.style";
import addIcon from "../../assets/icons/add-icon.svg";
import arrowIcon from "../../assets/icons/arrow-icon.svg";
import trashIcon from "../../assets/icons/trash-icon.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";

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
      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
          </button>
          <img src={arrowIcon} alt="filter-ascending-descending" />
        </header>
        <List>
          <div className="name-list">
            <span>{"nameList"}</span>
          </div>
          <div className="category">
            <span>
              Categoria:<small>{"category"}</small>
            </span>
          </div>
          <div className="timestamp">
            <img src={calendarIcon} alt="icone de calendário" />
            <span>Criado em: {"timestamp"}</span>
          </div>
          <div className="actions">
            <a href="link">
              <button type="button">
                <img
                  src={editIcon}
                  alt="botão de editar lista"
                  style={{ marginTop: "1.5px" }}
                />
              </button>
            </a>
            <button type="button">
              <img src={trashIcon} alt="botão de excluir lista" />
            </button>
          </div>
        </List>
      </ListContainer>
    </Container>
  );
}
