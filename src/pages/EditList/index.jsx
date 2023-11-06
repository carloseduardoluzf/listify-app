import PageHeader from "../../components/PageHeader";
import ListForm from "../../components/ListForm";
import { Container } from "./styles";

export default function EditList() {
  return (
    <Container>
      <PageHeader title="Editar lista" />
      <ListForm ButtonLabel="Salvar alterações" />
    </Container>
  );
}
