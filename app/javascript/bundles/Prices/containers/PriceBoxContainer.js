import { connect } from 'react-redux';
import PriceBox from '../components/PriceBox';

function mapStateToProps(state) {
  return {
    latestPriceData: state.getIn(['prices', 'BTC']).last(),
  }
}

export default connect(mapStateToProps)(PriceBox);
