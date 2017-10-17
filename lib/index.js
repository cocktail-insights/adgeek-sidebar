import React from 'react';
import PropTypes from 'prop-types';

import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';

const Sidebar = (props) => {
  const renderMenu = () => (
    props.menuItems && props.menuItems.map((menu, i) => (
      menu.type === 'header'
        ? <MenuHeader {...menu} key={i} />
        : <MenuItem {...menu} key={i} {...props} />
    ))
  );

  return (
    <nav id="mainnav-container">
      <div id="mainnav">
        {props.logo}
        <div id="mainnav-menu-wrap">
          <div className="nano">
            <div className="nano-content">
              <ul id="mainnav-menu" className="list-group">
                {renderMenu()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeClass: PropTypes.string,
  logo: PropTypes.node,
};

export default Sidebar;
