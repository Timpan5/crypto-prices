import { connect } from 'react-redux';
import Prices from '../components/Prices';
import * as actions from '../actions/pricesActionCreators';

const mapStateToProps = (state) => {
  return ({
  coin: 'BTC',
  priceData: state.display.getIn(['prices', 'BTC']),
})};

export default connect(mapStateToProps, actions)(Prices);
