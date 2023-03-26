import { useEffect, useMemo, useState } from 'react';
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

import { Loader } from '../../components/Loader';
import ContactsService from '../../services/ContactsService';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [orderBy, setOrderBy] = useState('ASC');
  const [searchTerm, setSearchTerm] = useState('');

  function handleToggleOrderBy() {
    setOrderBy((prevOrder) => (prevOrder === 'ASC' ? 'DESC' : 'ASC'));
  }

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [contacts, searchTerm]
  );

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoad(true);
        const contactsList = await ContactsService.listContacts(orderBy);
        setContacts(contactsList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoad(false);
      }
    }

    loadContacts();
    return () => console.log('oiiiiiiii desmontou coco');
  }, [orderBy]);

  return (
    <Container>
      <Loader isLoad={isLoad} />
      <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquisar contato..."
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      <Header>
        <h2>
          {filteredContacts.length === 1
            ? `${filteredContacts.length} contato`
            : `${filteredContacts.length} contatos`}
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
        {filteredContacts.map((contact) => (
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
