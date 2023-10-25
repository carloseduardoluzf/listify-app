import styled from "styled-components";

export const TableSubtitles = styled.th`
    color: red;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    th,
    td {
        padding: 12px 15px;
        text-align: center;
    }

    th {
        background-color: #109010;
        color: white;
    }

    tr {
        border-top: 0.3px solid #808080;
    }

    tr:hover {
        background-color: #ddd;
    }
`;
