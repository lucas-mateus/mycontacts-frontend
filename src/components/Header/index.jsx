import logo from '../../assets/images/logo.svg';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="my contacts" width={200} />
    </Container>
  );
}
