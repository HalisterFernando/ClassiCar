import React from 'react';
import { PropTypes } from 'prop-types';

class Trunfo extends React.Component {
  render() {
    const { isChecked, onInputChange } = this.props;
    return (
      <label htmlFor="isTrunfo">
        Super Trunfo:
        <input
          data-testid="trunfo-filter"
          type="checkbox"
          name="isTrunfo"
          id="isTrunfo"
          checked={ isChecked }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Trunfo.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Trunfo;
