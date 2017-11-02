import React from 'react';
import PropTypes from 'prop-types';

import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import UserMenu from './UserMenu';

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
        <div id="mainnav-menu-header">
          {props.logo}
        </div>
        <div id="mainnav-menu-wrap">
          <div className="nano">
            <div className="nano-content">
              <ul id="mainnav-menu" className="list-group">
                {renderMenu()}

                {props.userMenu && <UserMenu {...props.userMenu} />}
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
