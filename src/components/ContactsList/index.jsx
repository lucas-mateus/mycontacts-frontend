import arrow from '../../assets/images/arrow.svg';
import { Container, Header, ListHeader } from '../../pages/Home/styles';

export function ContactsList() {
  return (
    <Container>
      <Header>
        <h2>3 contatos</h2>
        <a href="/">Novo Contato</a>
      </Header>

      <ListHeader>
        <header>
          <button type="button">
            <span> Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
      </ListHeader>
    </Container>
  );
}
