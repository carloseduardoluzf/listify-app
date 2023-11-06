import styled from "styled-components";

export default styled.button`
     width: 100%;
     height: 52px;
     border: none;
     border-radius: 10px;
     font-size: 16px;
     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
     font-weight: bold;
     color: #000000;
     background-color: #6ed5b4;
     transition: background 0.2s ease-in;

     &:hover {
       background-color: #7cd9c3;
     }

     &:active{
       background-color: #5ACDA1;
     }

     &:disabled{
        background-color: #CCC;
        cursor: default;
     }

`;