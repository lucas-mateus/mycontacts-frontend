import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Button } from '../Button';
import { Overlay, Container, Footer } from './styles';

export function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h2>Tem certeza que deseja remover o contato ”Mateus Silva”?</h2>
        <p>Esta ação não poderá ser desfeita!</p>

        <Footer>
          <button className="cancel-btn" type="button">
            Cancelar
          </button>
          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
