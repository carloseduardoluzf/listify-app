import React from "react";
import {Container} from './Header.style'
import logo from "../../assets/icons/listify-logo.svg";
export default function Header() {
    return (
        <Container>
            <img src={logo} alt="Listify"  width={300}/>
        </Container>
    )
}
