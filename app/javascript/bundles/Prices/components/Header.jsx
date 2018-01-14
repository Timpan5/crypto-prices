import PropTypes from 'prop-types';
import React from 'react';

function Header(props) {
  return (
    <div id="header">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <span class="navbar-brand">Crypto Prices</span>
            <button type="button" class="btn btn-default navbar-btn">Bitcoin</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  coin: PropTypes.string.isRequired,
};

export default Header;
