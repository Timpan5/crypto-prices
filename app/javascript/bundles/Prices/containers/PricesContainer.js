import { connect } from 'react-redux';
import Prices from '../components/Prices';
import * as actions from '../actions/pricesActionCreators';

import { getPriceFromBitfinex } from '../sources/priceSources';

const mapStateToProps = (state) => {
  const priceData = state.display.getIn(['prices', 'BTC']);
 //immutable mergeWith
  debugger;
  return ({
  coin: 'BTC',
  // bitfinexData: state.display.getIn(['prices', 'BTC', 'Bitfinex']),
  // bittrexData: state.display.getIn(['prices', 'BTC', 'Bittrex']),
})};

export default connect(mapStateToProps, actions)(Prices);
