import { connect } from 'react-redux';
import Header from '../components/Header';
import * as actions from '../actions/headerActionCreators';
import { Map } from 'immutable';

const coinOptions = new Map({
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
});

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
    coinOptions,
  });
};

export default connect(mapStateToProps, actions, mergeProps)(Header);
