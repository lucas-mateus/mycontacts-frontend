import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/arrow.svg';
import emptyBox from '../../assets/images/empty-box.svg';

import { ContactCard } from '../../components/ContactCard';
import { Button } from '../../components/Button';
import {
  Container,
  Header,
  ListHeader,
  InputSearchContainer,
  CardContainer,
  ErrorContainer,
  EmptyListContainer,
} from './styles';

import { Loader } from '../../components/Loader';
import ContactsService from '../../services/ContactsService';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [orderBy, setOrderBy] = useState('ASC');
  const [searchTerm, setSearchTerm] = useState('');
  const [hasError, setHasError] = useState(false);

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

  const loadContacts = useCallback(async () => {
    try {
      setIsLoad(true);
      const contactsList = await ContactsService.listContacts(orderBy);
      setContacts(contactsList);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoad(false);
    }
  }, [orderBy]);

  function handleTryAgain() {
    loadContacts();
  }

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  return (
    <Container>
      <Loader isLoad={isLoad} />
      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquisar contato..."
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}
      <Header
        justifyContent={
          // eslint-disable-next-line no-nested-ternary
          hasError
            ? 'flex-end'
            : contacts.length > 0
            ? 'space-between'
            : 'center'
        }
      >
        {!hasError && contacts.length > 0 && (
          <h2>
            {filteredContacts.length === 1
              ? `${filteredContacts.length} contato`
              : `${filteredContacts.length} contatos`}
          </h2>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <p>Ocorreu um erro ao obter seus contatos!</p>
          <Button type="button" onClick={handleTryAgain}>
            Tentar novamente
          </Button>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {contacts.length < 1 && !isLoad && (
            <EmptyListContainer>
              <img src={emptyBox} alt="" />
              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão
                <strong> ”Novo contato”</strong> à cima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}
          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span> Nome</span>
                <img src={arrow} alt="arrow" />
              </button>
            </ListHeader>
          )}

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
        </>
      )}
    </Container>
  );
}
