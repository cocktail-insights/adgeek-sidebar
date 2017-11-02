import React from 'react';
import PropTypes from 'prop-types';

const UserMenu = (props) => {
  const styles = {
    profile: {
      width: '30px',
      height: '30px',
      borderRadius: '2px',
    },
    user: {
      marginLeft: '10px',
      display: 'inline-block',
    },
    bottom: {
      width: '100%',
      position: 'absolute',
      bottom: '10px',
      marginBottom: '15px',
    },
    right: {
      marginTop: '2px',
      display: 'inline-block',
    },

    collapse: {
      transition: 'all',
      WebkitTransition: 'all',
    },
  };

  const handleBlur = (e) => {
    e.preventDefault();
    const link = e.currentTarget.parentNode;

    setTimeout(() => {
      if (!link.contains(document.activeElement)) {
        this.handleToggle();
      }
    }, 0);
  };

  const handleToggle = (e) => {
    e && e.preventDefault();
    const topLink = e && e.currentTarget || document.querySelector('#mainnav-usermenu');
    const dropdown = topLink.nextSibling;

    topLink.classList.toggle('active');
    dropdown.classList.toggle('in');
  };

  const renderDropdownLinks = () => {
    return props.links && props.links.map(({ title, handler}, index) => (
      <li key={index}><a href onClick={handler}>{title}</a></li>
    ));
  };

  return (
    <li style={styles.bottom}>
      <a href id="mainnav-usermenu" style={styles.collapse} onMouseDown={handleBlur} onClick={handleToggle}>
        { props.profileImg ? (
          <img src={props.profileImg} className="img-cicle bg-light" style={styles.profile} />
        ) : '' }
        { props.icon ? (<span className={'fa fa-' + props.icon + ' fa-fw mar-rgt'}></span>) : '' }
        <span className="menu-title" style={styles.user}>
          <strong>{ props.name }</strong>
        </span>
        <span className="pull-right" style={styles.right}>
          <i className="fa fa-chevron-right fa-fw"></i>
        </span>
      </a>
      <ul className="collapse">
        {renderDropdownLinks()}
      </ul>
    </li>
  );
};

export default UserMenu;
