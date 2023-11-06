import { Form, ButtonContainer } from "./styles";
import PropTypes from 'prop-types';
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
export default function ListForm({ButtonLabel}) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome da lista" />
      </FormGroup>
      <FormGroup>
        <Select>
            <option value="mercado">Mercado</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Input placeholder="Descrição"/>
      </FormGroup>
      <FormGroup>
        <Input placeholder="Data de Validade" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Preço" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Quantidade" />
      </FormGroup>
      
      <ButtonContainer></ButtonContainer>
      <Button type="submit">{ButtonLabel}</Button>
    </Form>
  );
}

ListForm.propTypes = {
  ButtonLabel: PropTypes.string.isRequired,
};
