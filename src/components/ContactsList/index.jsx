import arrow from '../../assets/images/arrow.svg';
import { Container, Header, ListContainer } from './styles';

export function ContactsList() {
  return (
    <Container>
      <Header>
        <h2>3 contatos</h2>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span> Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
      </ListContainer>
    </Container>
  );
}
