import React from "react";
import { Table } from "./ProductTable.style";

export default function ProductTable(){

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
        <Table>
            <thead>
                <tr>
                    <TableSubtitles>Nome do Produto</TableSubtitles>
                    <TableSubtitles>Categoria</TableSubtitles>
                    <TableSubtitles>Descricao</TableSubtitles>
                    <TableSubtitles>Data de Validade</TableSubtitles>
                    <TableSubtitles>Preço</TableSubtitles>
                    <TableSubtitles>Quantidade</TableSubtitles>
                </tr>
            </thead>
            <tbody>
                {productList.map((product) => (
                    <tr key={product.id}>
                        <td>{product.nome}</td>
                        <td>{product.categoria}</td>
                        <td>{product.descricao}</td>
                        <td>{product.dataValidade}</td>
                        <td>R$ {product.precoUnitario.toFixed(2)}</td>
                        <td>{product.quantidade}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

