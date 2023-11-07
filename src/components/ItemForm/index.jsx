import { Form, ButtonContainer } from "./styles";
import PropTypes from 'prop-types';
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
export default function ItemForm({ButtonLabel}) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome do produto" />
      </FormGroup>
      <FormGroup>
        <Select>
            <option value="categoria">Categoria</option>
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

ItemForm.propTypes = {
  ButtonLabel: PropTypes.string.isRequired,
};
