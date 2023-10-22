import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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
        <>
            <div className="App">
                <h1>Listify</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>R$ {product.price.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;
