import PropTypes from 'prop-types';
import React from 'react';

function PriceBox(props) {
  function renderBox(price, exchange) {
    return (
      <div id={`${exchange}-box`} className="pricebox panel panel-default" key={exchange} >
        <div className="panel-heading">{exchange}</div>
        <div className="panel-body">{price}</div>
      </div>);
  }

  const renderBoxes = props.latestPriceData ?
    (props.latestPriceData.map((price, exchange) => renderBox(price, exchange))).valueSeq() : null;

  return (
    <div id="pricebox-container">
      {renderBoxes}
    </div>
  );
}

PriceBox.propTypes = {
  latestPriceData: PropTypes.object,
};

export default PriceBox;
