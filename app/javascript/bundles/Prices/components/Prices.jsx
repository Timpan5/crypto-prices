import PropTypes from 'prop-types';
import React from 'react';
import functional from 'react-functional'

function Prices(props) {
  return (
    <div>
      { props.coin }
      { props.name }
    </div>
  );
}

Prices.componentDidMount = (props) => {
  setInterval(props.fetchCoinPrice, 5000, props.coin);
};

Prices.propTypes = {
  coin: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fetchCoinPrice: PropTypes.func.isRequired,
};

export default functional(Prices);
