import React from 'react';
import propTypes from 'prop-types';

export default function Attribute({ attribute, value }) {
  return (
    <span>{`${attribute}: ${value}`}</span>

  );
}

Attribute.propTypes = {
  attribute: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
};
