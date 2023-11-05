import styled from "styled-components";

export const Container = styled.div`
    width: 1280px;
    height: 700px;
    border-radius: 20px;
    margin-top: 32px;
    position: relative;
    background-color: aliceblue;

`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 48px;
    padding-right: 80px;
    padding-left: 80px;


`

export const Title = styled.div`
    
`

export const InputSearchContainer = styled.div`
    display: flex;
    align-items: center;

    input {
        outline: none !important;
        width: 317px;
        height: 40px;
        margin-right: 48px;
        border-radius: 20px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border: none;
        background-color: #D9BEBE;
        padding: 0 16px;
        color: #000000;
        font-weight: 600;

        &::placeholder {
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            color: #000000;
        }
    }

    img {
        cursor: pointer;
    }
    
`