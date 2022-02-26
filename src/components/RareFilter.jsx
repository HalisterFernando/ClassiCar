import React from 'react';
import { PropTypes } from 'prop-types';

class RareFilter extends React.Component {
  render() {
    const { onInputChange, rare, isDisable } = this.props;
    return (
      <select
        data-testid="rare-filter"
        name="rareFilter"
        onChange={ onInputChange }
        value={ rare }
        disabled={ isDisable }
      >
        <option value="todas">Todas</option>
        <option value="normal">Normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito Raro</option>
      </select>
    );
  }
}

RareFilter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  rare: PropTypes.string.isRequired,
  isDisable: PropTypes.bool.isRequired,
};

export default RareFilter;
