import PropTypes from 'prop-types';
import React from 'react';
import functional from 'react-functional'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PriceBoxContainer from '../containers//PriceBoxContainer';

function renderPriceChart(priceData) {
  return (
    <div id="pricechart">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={800} height={400} data={priceData.toJS()}
           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis type="number" domain={['dataMin - 25', 'dataMax + 25']} allowDecimals={false} scale="linear" />
           <CartesianGrid strokeDasharray="3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="Bitfinex" stroke="#8884d8" activeDot={{r: 8}}/>
           <Line type="monotone" dataKey="Bittrex" stroke="#82ca9d" activeDot={{r: 8}}/>
           <Line type="monotone" dataKey="Poloniex" stroke="#ed1047" activeDot={{r: 8}}/>
           <Line type="monotone" dataKey="Hitbtc" stroke="#15f7d1" activeDot={{r: 8}}/>
           <Line type="monotone" dataKey="Binance" stroke="#f7ab15" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function Prices(props) {
  return (
    <div>
      <PriceBoxContainer />
      {renderPriceChart(props.priceData)}
    </div>
  );
}

Prices.componentDidMount = (props) => {
  props.fetchCoinPrice(props.coin);
  setInterval(props.fetchCoinPrice, 3500, props.coin);
};

Prices.propTypes = {
  coin: PropTypes.string.isRequired,
  fetchCoinPrice: PropTypes.func.isRequired,
  priceData: ImmutablePropTypes.list.isRequired,
};

export default functional(Prices);
