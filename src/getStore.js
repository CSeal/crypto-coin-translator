import {
      createStore,
      applyMiddleware,
      compose,
} from 'redux';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import createSagaMiddleWare from 'redux-saga';
import { reducer } from './combineReducers';
import { defaultState } from './defaultState';
import { getQuery } from './utility';
import { initSagas } from './initSagas';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) {
    return state.toJS();
  }
  return state;
}

const logger = createLogger({stateTransformer});

export const getStore = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  const meddlewaries = [sagaMiddleWare];
  if (getQuery()['logger']) {
    meddlewaries.push(logger);
  }

  const composible = [applyMiddleware(...meddlewaries)
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];

  const enhancer = compose(
    ...composible
  );

  const store = createStore(
    reducer,
    defaultState,
    enhancer,
  );
    console.log('saga is implemeting');
    initSagas(sagaMiddleWare);
  return store;
}