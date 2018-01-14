import { connect } from 'react-redux';
import Prices from '../components/Prices';
import * as actions from '../actions/pricesActionCreators';

const mapStateToProps = (state) => {
  const currentCoin = state.display.get('currentCoin');
  return ({
    coin: currentCoin,
    priceData: state.display.getIn(['prices', currentCoin]),
  });
};

export default connect(mapStateToProps, actions)(Prices);
