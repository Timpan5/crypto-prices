import PropTypes from 'prop-types';
import React from 'react';
import functional from 'react-functional'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Prices(props) {
  const bitfinexData = props.priceData.reduce((array, price) => {
    array.push({ Bitfinex: price });
    return array;
  }, []);

  return (
    <div>
      <LineChart width={600} height={300} data={bitfinexData}
         margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis type="number" domain={['dataMin - 25', 'dataMax + 25']} allowDecimals={false} scale="linear" />
         <CartesianGrid strokeDasharray="3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="Bitfinex" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
      { props.coin }
      { props.priceData.toJS() }
    </div>
  );
}

Prices.componentDidMount = (props) => {
  props.fetchCoinPrice(props.coin);
  setInterval(props.fetchCoinPrice, 5000, props.coin);
};

Prices.propTypes = {
  coin: PropTypes.string.isRequired,
  priceData: PropTypes.object.isRequired,
  fetchCoinPrice: PropTypes.func.isRequired,
};

export default functional(Prices);
