import PropTypes from 'prop-types';
import React from 'react';
import functional from 'react-functional'

function Prices(props) {
  return (
    <div>
      { props.name }
    </div>
  );
}

Prices.componentDidMount = (props) => {
  setInterval(props.fetchCoinPrice, 3000, props.name);
};

Prices.propTypes = {
  name: PropTypes.string.isRequired,
  fetchCoinPrice: PropTypes.func.isRequired,
};

export default functional(Prices);
