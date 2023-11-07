import React, { useState } from "react";
import trashIcon from "../../assets/icons/trash-icon.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";

import PageHeader from "../../components/PageHeader";
import { useHistory, Link } from "react-router-dom";
import { Container, ItemContainer, Item, ItemHeader, AddItem } from "./styles";

export default function ListItems() {
  const history = useHistory();

  const toList = () => {
    history.push("/list/1");
  };

  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "Produto 1",
      category: "Categoria A",
      price: 10.99,
    },
    {
      id: 2,
      name: "Produto 2",
      category: "Categoria B",
      price: 15.99,
    },
    {
      id: 3,
      name: "Produto 3",
      category: "Categoria A",
      price: 7.99,
    },
    {
      id: 4,
      name: "Produto 4",
      category: "Categoria C",
      price: 20.99,
    },
    {
      id: 5,
      name: "Produto 5",
      category: "Categoria B",
      price: 12.99,
    },
  ]);

  return (
    <Container>
      <ItemContainer>
        <PageHeader />
        <AddItem><img src={addIcon} alt="" /></AddItem>
        <ItemHeader>
        <li>
            <span>Nome do produto</span>
          </li>
          <li>
            <span>Categoria</span>
          </li>
          <li>
            <span>Descrição</span>
          </li>
          <li>
            <span>Data de Validade</span>
          </li>
          <li>
            <span>Preço</span>
          </li>
          <li>
            <span>Quantidade</span> 
          </li>
        </ItemHeader>
        <Item>
         <li>Pão Frances</li>
         <li>Panificação</li>
         <li>Feito com massa integral</li>
         <li>10/11/2023</li>
         <li>R$ 10.00</li>
         <li>10</li>
         <li><div className="actions">
            <Link to="/editItem/1">
              <button type="button">
                <img
                  src={editIcon}
                  alt="botão de editar item"
                  style={{ marginTop: "1.5px" }}
                />
              </button>
            </Link>
            <button type="button">
              <img src={trashIcon} alt="botão de excluir item da lista" />
            </button>
          </div></li>

          
        </Item>
        
      </ItemContainer>
    </Container>
  );
}
