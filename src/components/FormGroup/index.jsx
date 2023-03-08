import PropTypes from 'prop-types';
import { Container } from './styles';

export function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FormGroup.defaultProps = {
  error: null,
};
