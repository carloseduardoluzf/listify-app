import React from "react";
import {Container, LogoImage} from './Header.style'
import logo from "../../assets/icons/listify-logo.svg";
export default function Header() {
    return (
        <Container>
            <LogoImage src={logo} alt="Listify"  width={300}/>
        </Container>
    )
}
