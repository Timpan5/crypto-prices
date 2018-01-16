import { connect } from 'react-redux';
import Prices from '../components/Prices';
import * as actions from '../actions/pricesActionCreators';

const shouldRenderSpinner = (list) => list.isEmpty();

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
    renderSpinner: shouldRenderSpinner(stateProps.priceData),
  });
};

export default connect(mapStateToProps, actions, mergeProps)(Prices);
