import { connect } from 'react-redux';
import PriceBox from '../components/PriceBox';

function mapStateToProps(state) {
  const currentCoin = state.get('currentCoin');
  return {
    latestPriceData: state.getIn(['prices', currentCoin]).last(),
  }
}

export default connect(mapStateToProps)(PriceBox);
