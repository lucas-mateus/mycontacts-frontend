import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormGroup } from '../FormGroup';
import { Form } from './styles';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <FormGroup>
        <Input
          placeholder="Nome..."
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup error="O formato do e-mail é inválido.">
        <Input
          placeholder="E-mail..."
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone..."
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="" disabled>
            Categoria
          </option>

          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
          <option value="linkedin">LinkedIn</option>
          <option value="facebook">Facebook</option>
          <option value="whatsapp">WhatsApp</option>
        </Select>
      </FormGroup>

      <Button type="submit">{buttonLabel}</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
