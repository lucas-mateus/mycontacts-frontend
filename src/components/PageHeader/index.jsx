import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './styles';
import arrow from '../../assets/images/arrow.svg';

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h2>{title}</h2>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
