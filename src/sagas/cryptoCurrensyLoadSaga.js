import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import {
  CRYPTO_CURRENCY_LOADING_START,
  cryptoCurrensyLoadingFinish,
  cryptoCurrensyLoadAction,
} from '../actions'
import { cryptoCurrencyNames, currencyNames } from '../constans';
const qs = require('qs');
const axiosInstanse = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/price',
  headers: {
    "authorization": `Apikey ${process.env.REACT_APP_CURRENSY_API_KEY}`,
    "Accept":"application/json; charset=utf-8",
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, {arrayFormat: 'brackets'});
  },
  method: 'get',
});

function* loadCryptoCurrensy(){
  for( let i = 0; i < cryptoCurrencyNames.length; i++) {
    const cryptoCurrencyName = cryptoCurrencyNames[i];
    const config = {
      params: {
        fsym: cryptoCurrencyName,
        tsyms: currencyNames.join(','),
      }
    }
    const { status, data } = yield axiosInstanse.request(config);
    if ( status !== 200 ) {
      continue;
    }
    yield put(cryptoCurrensyLoadAction({
      cryptoCurrencyName,
      currencyValueObj: data,
    }))
  };
  yield put(cryptoCurrensyLoadingFinish())
}

export function* cryptoCurrensyLoadEventInterceptor(){
    yield takeLatest(CRYPTO_CURRENCY_LOADING_START, loadCryptoCurrensy);
}