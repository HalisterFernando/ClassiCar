import React from 'react';
import { PropTypes } from 'prop-types';

class CardFilter extends React.Component {
  render() {
    const { filter, onInputChange } = this.props;

    return (
      <div>
        <label htmlFor="search">
          <input
            value={ filter }
            onChange={ onInputChange }
            data-testid="name-filter"
            id="search"
            name="filter"
            type="text"
          />
        </label>
      </div>
    );
  }
}

CardFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardFilter;
