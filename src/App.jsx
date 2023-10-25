import { useState } from "react";
import ProductTable from "./components/ProductTable";
import "./App.css";

function App() {
    const [productList, setProductList] = useState([
        {
            id: 1,
            nome: "Produto 1",
            categoria: "Categoria A",
            descricao: "Descrição do produto",
            dataValidade: "22/10/2023",
            precoUnitario: 10.99,
            quantidade: 1,
        },
        {
            id: 2,
            nome: "Produto 2",
            categoria: "Categoria B",
            descricao: "Descrição do produto",
            dataValidade: "22/10/2023",
            precoUnitario: 15.99,
            quantidade: 1,
        },
        {
            id: 3,
            nome: "Produto 3",
            categoria: "Categoria A",
            descricao: "Descrição do produto",
            dataValidade: "22/10/2023",
            precoUnitario: 7.99,
            quantidade: 1,
        },
        {
            id: 4,
            nome: "Produto 4",
            categoria: "Categoria C",
            descricao: "Descrição do produto",
            dataValidade: "22/10/2023",
            precoUnitario: 20.99,
            quantidade: 1,
        },
        {
            id: 5,
            nome: "Produto 5",
            categoria: "Categoria B",
            descricao: "Descrição do produto",
            dataValidade: "22/10/2023",
            precoUnitario: 12.99,
            quantidade: 1,
        },
    ]);

    return (
        <>
            <div className="App">
                <h1>Listify</h1>
                <ProductTable productList={productList} />
            </div>
        </>
    );
}

export default App;
