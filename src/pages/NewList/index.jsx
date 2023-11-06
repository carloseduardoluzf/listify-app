import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
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
