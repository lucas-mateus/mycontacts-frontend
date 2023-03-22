import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardContainer } from './styles';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

export function ContactCard({ id, name, email, categoryName, phone }) {
  return (
    <CardContainer>
      <div className="info">
        <div className="name-info">
          <strong>{name}</strong>
          {categoryName && <small>{categoryName}</small>}
        </div>
        <span>{email}</span>
        <span>{phone}</span>
      </div>

      <div className="actions">
        <Link to={`/edit/${id}`}>
          <img src={edit} alt="Edit" />
        </Link>
        <button type="button">
          <img src={trash} alt="Delete" />
        </button>
      </div>
    </CardContainer>
  );
}

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  categoryName: PropTypes.string,
};

ContactCard.defaultProps = {
  categoryName: null,
};
