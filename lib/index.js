import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
}

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
