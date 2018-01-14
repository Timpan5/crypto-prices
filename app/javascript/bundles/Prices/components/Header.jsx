import PropTypes from 'prop-types';
import React from 'react';

function Header(props) {
  return (
    <div id="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Crypto Prices</span>
            <button type="button" className="btn btn-default navbar-btn" onClick={() => props.coinNameUpdate('BTC')}>
              Bitcoin
            </button>
            <button type="button" className="btn btn-default navbar-btn" onClick={() => props.coinNameUpdate('ETH')}>
              Ethereum
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  coin: PropTypes.string.isRequired,
  coinNameUpdate: PropTypes.func.isRequired,
};

export default Header;
