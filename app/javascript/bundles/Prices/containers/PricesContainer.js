import { connect } from 'react-redux';
import Prices from '../components/Prices';
import * as actions from '../actions/pricesActionCreators';

import { getPriceFromApi } from '../sources/priceBoxSources';

const mapStateToProps = (state) => {
  return ({
  name: state.display.getIn(['prices', 'BTC']).toString(),
  coin: 'BTC',
  // name: getPriceFromApi(),
})};

export default connect(mapStateToProps, actions)(Prices);
