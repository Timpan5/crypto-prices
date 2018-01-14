import { connect } from 'react-redux';
import Prices from '../components/Prices';
import * as actions from '../actions/pricesActionCreators';

const mapStateToProps = (state) => {
  const currentCoin = state.get('currentCoin');
  return ({
    coin: currentCoin,
    priceData: state.getIn(['prices', currentCoin]),
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps)  => {
  return ({
    coin: stateProps.coin,
    priceData: stateProps.priceData,
    fetchCoinPrice: dispatchProps.fetchCoinPrice,
  });
};

export default connect(mapStateToProps, actions, mergeProps)(Prices);
