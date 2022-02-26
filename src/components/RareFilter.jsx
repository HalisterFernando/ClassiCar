import React from 'react';
import { PropTypes } from 'prop-types';

class RareFilter extends React.Component {
  render() {
    const { onInputChange, rare } = this.props;
    return (
      <select
        data-testid="rare-filter"
        name="rareFilter"
        onChange={ onInputChange }
        value={ rare }
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
};

export default RareFilter;
