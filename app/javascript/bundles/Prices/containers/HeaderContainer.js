import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  const currentCoin = state.display.get('currentCoin');
  return ({
    coin: currentCoin,
  });
};

export default connect(mapStateToProps)(Header);
