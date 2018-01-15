import PropTypes from 'prop-types';
import React from 'react';
import functional from 'react-functional';
import { triggerGreenFlash, triggerRedFlash } from '../utils/flash';

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

PriceBox.componentDidUpdate = (props, prevProps) => {
  if (props.latestPriceData && prevProps.latestPriceData) {
    const flashGreenExchanges = props.latestPriceData.filter(
      (price, exchange) => price > prevProps.latestPriceData.get(exchange));
    const flashRedExchanges = props.latestPriceData.filter(
      (price, exchange) => price < prevProps.latestPriceData.get(exchange));

    triggerGreenFlash(flashGreenExchanges);
    triggerRedFlash(flashRedExchanges);
  }
}

PriceBox.propTypes = {
  latestPriceData: PropTypes.object,
};

export default functional(PriceBox);
