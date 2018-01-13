import PropTypes from 'prop-types';
import React from 'react';

function PriceBox(props) {
  function renderBox(price, exchange) {
    return (<div id={`${exchange}-box`} key={exchange} >{price}: {exchange}</div>);
  }

  const renderBoxes = props.latestPriceData ?
    (props.latestPriceData.map((price, exchange) => renderBox(price, exchange))).valueSeq() : null;

  return (
    <div id='pricebox'>
      {renderBoxes}
    </div>
  );
}

PriceBox.propTypes = {
  latestPriceData: PropTypes.object,
};

export default PriceBox;
