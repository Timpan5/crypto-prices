import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

function Header(props) {
  const renderCoinButton = (abbreviation, coinName) => (
    <button type="button" className="btn btn-default navbar-btn" key={abbreviation}
      onClick={() => props.coinNameUpdate(abbreviation)}>
      {coinName}
    </button>
  );

  const coinButtons = props.coinOptions.reduce((buttons, name, abbreviation) => (
    buttons.concat([renderCoinButton(abbreviation, name)])
  ), []);

  return (
    <div id="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Crypto Prices</span>
            {coinButtons}
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  coin: PropTypes.string.isRequired,
  coinNameUpdate: PropTypes.func.isRequired,
  coinOptions: ImmutablePropTypes.map.isRequired,
};

export default Header;
