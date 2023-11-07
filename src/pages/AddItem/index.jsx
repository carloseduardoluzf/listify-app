import PageHeader from "../../components/PageHeader";
import ItemForm from "../../components/ItemForm/index";
import { Container } from "./styles";

export default function AddItem(){

    const pageHeaderStyle = {
        marginTop: '50px',
        marginBottom: '24px',
        marginRight: '379px',
      };
    

    return(
        <Container>
            <PageHeader title="Adicionar item" style={pageHeaderStyle} link={'/list/1'}/>
            <ItemForm ButtonLabel="Cadastrar item" />
        </Container>
    )
}