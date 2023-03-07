import { Link } from 'react-router-dom';
import arrow from '../../assets/images/arrow.svg';
import { Modal } from '../../components/Modal';
import {
  Container,
  Header,
  ListContainer,
  InputSearchContainer,
} from './styles';

export function Home() {
  return (
    <Container>
      <Modal danger />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <h2>3 contatos</h2>
        <Link to="/new">Novo Contato</Link>
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
