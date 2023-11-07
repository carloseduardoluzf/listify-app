import styled from "styled-components";



export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    th,
    td {
        padding: 12px 15px;
        text-align: center;
    }

    th {
        background-color: #6ed5b4;
        color: white;
    }

    tr {
        border-top: 0.3px solid #ffffff;
    }

    tr:hover {
        background-color: #ddd;
    }
`;
