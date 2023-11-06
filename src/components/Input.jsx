import styled from "styled-components";

export default styled.input`
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  height:52px;
  background-color: #ffff;
  outline: none;
  border: 4px solid #ffffff;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &:focus {
    border: 4px solid #6ed5b4
  }

  
`;
