import PropTypes from 'prop-types';
import { FormGroup } from '../FormGroup';
import { Form } from './styles';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome..." type="text" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail..." type="email" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone..." type="tel" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="" disabled>
            Selecione uma categoria
          </option>

          <option value="instagram">Instagram</option>
          <option>LinkedIn</option>
          <option>Facebook</option>
          <option>WhatsApp</option>
        </Select>
      </FormGroup>

      <Button type="submit">{buttonLabel}</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
