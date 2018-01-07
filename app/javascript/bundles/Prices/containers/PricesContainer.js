import { connect } from 'react-redux';
import Prices from '../components/Prices';
import * as actions from '../actions/pricesActionCreators';

import { getPriceFromApi } from '../sources/priceBoxSources';

const mapStateToProps = (state) => ({
  name: state.display.getIn(['prices', 'name']),
  // name: getPriceFromApi(),
});

export default connect(mapStateToProps, actions)(Prices);
