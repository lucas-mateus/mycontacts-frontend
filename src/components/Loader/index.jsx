import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './styles';

export function Loader({ isLoad }) {
  if (!isLoad) {
    return null;
  }
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root')
  );
}

Loader.propTypes = {
  isLoad: PropTypes.bool.isRequired,
};
