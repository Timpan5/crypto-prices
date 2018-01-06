import { connect } from 'react-redux';
import PriceBox from '../components/PriceBox';

function mapStateToProps(state) {
  return {
    todos: 'test', 
  }
}

export default connect(mapStateToProps, actions)(Prices);
