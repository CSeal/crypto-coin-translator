import React from 'react';
import { getStore } from '../../../getStore';
import { Provider } from 'react-redux';
import { MainContent } from '../index';
import { cryptoCurrensyLoadingStart } from '../../../actions';

const store = getStore();
export const App = () => {
    return (
      <div>
        <header>
          CryptoCoin to Coin Transleter
        </header>
        <Provider store={store}>
          <MainContent />
        </Provider>
      </div>
    );
  }
  store.dispatch(cryptoCurrensyLoadingStart());
export default App;
