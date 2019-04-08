import React, { Component } from 'react';
import connector from './connector';
import { currencyNames } from '../../../constans';
import { CoinViewRB } from '../../controls';

class CoinChoicerConteiner extends Component {
  state = {
    currentCoinValue: 0,
  }

  render(){
    const {
      selectedCryptoCoin,
      selectedCoin,
    } = this.props;
    const {
      currentCoinValue,
    } = this.state;
    return (
      <>
        <label htmlFor="cryptoCoinInput" className="cryptoCoinInput" >
          Volume: <input id="cryptoCoinInput" value={currentCoinValue} onChange={this.inputChangeHandler}
          />
        </label>
        <div className="coinsListView">
          {
            currencyNames.map(currencyName => (
              <CoinViewRB
                key={currencyName}
                coinName={currencyName}
                changeHandler={this.coinChangeHandler}
                checkedCoin={selectedCoin}
              />
            ))
          }
        </div>
        <h3><span>{currentCoinValue} {selectedCryptoCoin}</span> will be <span>{this.translateCryptoCoinToCoin()}</span> in <span>{selectedCoin}</span></h3>
      </>
    )
  }

  inputChangeHandler = ({target}) => {
    let inputValue = +target.value;
    if(!isNaN(inputValue) && inputValue >= 0) {
      inputValue = inputValue.toFixed();
      this.setState({currentCoinValue: inputValue});
    }
  }

  translateCryptoCoinToCoin = () => {
    const {
      cryptoCoins,
      selectedCryptoCoin,
      selectedCoin,
    } = this.props;
    const {
      currentCoinValue,
    } = this.state;
    const currentCourse = cryptoCoins[selectedCryptoCoin][selectedCoin];
    return (currentCoinValue * currentCourse).toFixed(2);
  }
  coinChangeHandler = ({target}) => {
    const {  activeCoinChangeHandler } = this.props;
    activeCoinChangeHandler(target.value)
  }
}

export const CoinChoicer = connector(CoinChoicerConteiner);