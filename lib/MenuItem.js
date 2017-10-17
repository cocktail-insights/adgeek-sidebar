import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const renderLabel = () => {
    const classes = `pull-right label label-${props.labelColor || 'primary'}`;
    return <span className={classes}>{props.label}</span>;
  };

  const renderBadge = () => {
    const classes = `pull-right text-${props.badgeColor} text-bold`;
    return <span className={classes}>{props.badge}</span>;
  };

  const rightIcon = () => (props.label ? renderLabel() : renderBadge());

  const faIcon = `fa fa-${props.icon}`;

  return (
    <li className={props.activeClass}>
      <a href={props.route} onClick={props.onClick}>
        <i className={faIcon} />
        <span className="menu-title">
          <strong>{props.text}</strong>
          {rightIcon()}
        </span>
      </a>
    </li>
  );
};

MenuItem.defaultProps = {
  labelColor: '',
  label: '',
  onClick: () => {},
  badgeColor: '',
  badge: '',
  route: '',
};

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  badgeColor: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  badge: PropTypes.string,
  route: PropTypes.string,
};

export default MenuItem;

