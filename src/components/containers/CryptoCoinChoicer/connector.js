import { connect } from 'react-redux';
import { cryptoCurrensyChangeActive } from '../../../actions'
const mapStateToProps = state => {
  return {
    cryptoCoins: state.getIn(['cryptoCurrencyReducer','coins']).toJS(),
    selectedCryptoCoin: state.getIn(['cryptoCurrencyReducer','activeCryptoCoin']),
  }
};

const mapDispatchToProps = dispatch => ({
  activeCryptoCoinChangeHandler: activeCryptoCoinName => dispatch(cryptoCurrensyChangeActive({cryptoCurrencyName: activeCryptoCoinName})),
});

export default connect(mapStateToProps, mapDispatchToProps);