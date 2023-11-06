import React from "react";
import {Container, LogoImage} from './styles'
import logo from "../../assets/icons/listify-logo.svg";
import { useHistory } from "react-router-dom";
export default function Header() {

    const history = useHistory();

    const toHome = () => {
      history.push("/");
    }

    return (
        <Container>
            <LogoImage onClick={toHome} src={logo} alt="Listify"  width={300}/>
        </Container>
    )
}
