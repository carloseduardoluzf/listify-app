import React from "react";
import { TableSubtitles } from "./ProductTable.style";
import { Table } from "./ProductTable.style";

const ProductTable = ({ productList }) => {
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
                    <TableSubtitles>Adicionar Produto</TableSubtitles>
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
                        <td>Duds</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ProductTable;
