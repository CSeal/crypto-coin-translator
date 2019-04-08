import { createReducer } from '../utility';
import { fromJS } from 'immutable';
import {
  CRYPTO_CURRENCY_LOADING_START,
  CRYPTO_CURRENCY_LOADING_FINISH,
  CRYPTO_CURRENCY_LOAD,
  CRYPTO_CURRENCY_CHANGE_ACTIVE,
  CURRENCY_CHANGE_ACTIVE,
} from '../actions';
import { cryptoCurrencyNames, currencyNames } from '../constans';
const stateOnj = {};
stateOnj.coins = cryptoCurrencyNames.reduce((state, cryptoCurrencyName) => {
  state[cryptoCurrencyName] = currencyNames.reduce((cryptoCurrency, currencyName) => {
    cryptoCurrency[currencyName] = 0;
    return cryptoCurrency;
  }, {});
  return state;
}, {});
stateOnj.loaded = false;
stateOnj.loading = false;
stateOnj.activeCryptoCoin = cryptoCurrencyNames[0];
stateOnj.activeCoin = currencyNames[0];
const initState = fromJS(stateOnj);

export const cryptoCurrencyReducer = createReducer(initState, {
  [CRYPTO_CURRENCY_LOADING_START](state) {
    return state.set('loading', true);
  },
  [CRYPTO_CURRENCY_LOADING_FINISH](state) {
    return state.set('loading', false).set('loaded', true);
  },
  [CRYPTO_CURRENCY_LOAD](state, {payload}) {
    const { cryptoCurrencyName, currencyValueObj } = payload;
    return Object.keys(currencyValueObj).reduce((state, currName) => {
      return state.setIn(['coins', cryptoCurrencyName, currName], currencyValueObj[currName]);
    }, state);
  },
  [CRYPTO_CURRENCY_CHANGE_ACTIVE](state, {payload}) {
    const { cryptoCurrencyName } = payload;
    if (state.get('activeCryptoCoin') !== cryptoCurrencyName ) {
      return state.set('activeCryptoCoin', cryptoCurrencyName);
    }
    return state;
  },
  [CURRENCY_CHANGE_ACTIVE](state, {payload}) {
    const { currencyName } = payload;
    if (state.get('activeCoin') !== currencyName ) {
      return state.set('activeCoin', currencyName);
    }
    return state;
  }
})
