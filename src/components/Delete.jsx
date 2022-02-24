import React from 'react';
import { PropTypes } from 'prop-types';

class Delete extends React.Component {
  render() {
    const { deleteCard, cardName } = this.props;
    return (
      <button
        value={ cardName }
        data-testid="delete-button"
        id="delete"
        onClick={ deleteCard }
        type="button"
      >
        Excluir

      </button>
    );
  }
}

Delete.propTypes = {
  deleteCard: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default Delete;
