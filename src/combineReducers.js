import  * as reducers from './reducers';
import { fromJS } from 'immutable'

export const combineReducers = (reducersObj) => {
  const defaultState = fromJS(Object.keys(reducersObj).reduce( (acc, reducerName) => {
    acc[reducerName] = reducersObj[reducerName](undefined, []);
    return acc;
  }, {}));

  return (state = defaultState, action) => {
    return Object.keys(reducersObj).reduce((state, reducerName) => {
      const reducer = reducersObj[reducerName];
      const prevState = state.get(reducerName);
      const newValue = reducer(prevState, action);
      if (newValue === undefined) {
        throw new Error(`A reducer returned undefined when reducerName::"${reducerName}"`);
      }
      return state.set(reducerName, newValue);
    }, state);
  }
}

export const reducer = combineReducers(reducers);