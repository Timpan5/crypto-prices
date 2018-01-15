import { connect } from 'react-redux';
import Header from '../components/Header';
import * as headerActions from '../actions/headerActionCreators';
import * as priceActions from '../actions/pricesActionCreators';

const combinedActions = Object.assign({}, headerActions, priceActions);

const mapStateToProps = (state) => {
  const currentCoin = state.get('currentCoin');
  return ({
    coin: currentCoin,
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps)  => {
  return ({
    coin: stateProps.coin,
    coinNameUpdate: dispatchProps.coinNameUpdate,
    fetchCoinPrice: dispatchProps.fetchCoinPrice,
  });
};

export default connect(mapStateToProps, combinedActions, mergeProps)(Header);
