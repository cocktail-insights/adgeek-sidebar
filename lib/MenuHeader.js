import React from 'react';
import PropTypes from 'prop-types';

const MenuHeader = ({ text }) => (
  <li className="list-header">{text}</li>
);

MenuHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MenuHeader;
