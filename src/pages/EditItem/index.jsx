import PageHeader from "../../components/PageHeader";
import ItemForm from "../../components/ItemForm";
import { Container } from "./styles";

export default function EditItem() {

  const pageHeaderStyleEdit = {
    marginTop: '50px',
    marginBottom: '24px',
    marginRight: '438px'
  }

  return (
    <Container>
      <PageHeader title="Editar item" style={pageHeaderStyleEdit} link={'/list/1'} />
      <ItemForm ButtonLabel="Salvar alterações" />
    </Container>
  );
}
