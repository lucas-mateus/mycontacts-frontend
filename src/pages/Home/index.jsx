import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/arrow.svg';
import { ContactCard } from '../../components/ContactCard';
import {
  Container,
  Header,
  ListHeader,
  InputSearchContainer,
  CardContainer,
} from './styles';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('ASC');

  function handleToggleOrderBy() {
    setOrderBy((prevOrder) => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));
  }

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`, {
      method: 'GET',
    })
      .then(async (response) => {
        const requestedContacts = await response.json();
        setContacts(requestedContacts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [orderBy]);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <h2>
          {contacts.length === 1
            ? `${contacts.length} contato`
            : `${contacts.length} contatos`}
        </h2>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleToggleOrderBy}>
          <span> Nome</span>
          <img src={arrow} alt="arrow" />
        </button>
      </ListHeader>

      <CardContainer>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            id={contact.id}
            name={contact.name}
            categoryName={contact.category_name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </CardContainer>
    </Container>
  );
}
