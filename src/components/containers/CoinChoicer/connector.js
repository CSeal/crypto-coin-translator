import { connect } from 'react-redux';
import { сurrensyChangeActive } from '../../../actions'
const mapStateToProps = state => {
  return {
    cryptoCoins: state.getIn(['cryptoCurrencyReducer','coins']).toJS(),
    selectedCryptoCoin: state.getIn(['cryptoCurrencyReducer','activeCryptoCoin']),
    selectedCoin: state.getIn(['cryptoCurrencyReducer','activeCoin']),
  }
};

const mapDispatchToProps = dispatch => ({
  activeCoinChangeHandler: activeCoinName => dispatch(сurrensyChangeActive({currencyName: activeCoinName})),
});

export default connect(mapStateToProps, mapDispatchToProps);