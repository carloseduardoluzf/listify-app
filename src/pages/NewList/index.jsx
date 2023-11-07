import PageHeader from "../../components/PageHeader";
import ListForm from "../../components/ListForm";
import { Container } from "./styles";
export default function NewList() {
  return (
    <Container>
      <PageHeader title="Criar lista" />
      <ListForm ButtonLabel="Cadastrar"/>
    </Container>
  );
}
